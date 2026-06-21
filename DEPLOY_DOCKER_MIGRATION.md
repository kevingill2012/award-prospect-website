# Docker 迁移部署指南

## 文件清单

所有新创建的 Docker 迁移文件：

| # | 文件 | 用途 |
|---|------|------|
| 1 | `~/docs/Dockerfile` | Docs 文档站 |
| 2 | `~/docs/docker-compose.docs.yml` | Docs 编排 |
| 3 | `~/B2B/Dockerfile` | B2B 客户开发 |
| 4 | `~/B2B/docker-compose.b2b.yml` | B2B 编排 |
| 5 | `~/OZON/Dockerfile` | OZON monorepo (3 apps) |
| 6 | `~/OZON/deploy/docker-compose.ozon-apps.yml` | OZON 应用编排 |
| 7 | `~/OZON/deploy/auto-deploy.docker.sh` | Docker 版自动部署脚本 |

## 部署顺序 (按复杂度递增)

### Step 1: Docs (验证 Docker 流程)
```bash
ssh -i ~/.ssh/netcup_space_center_ed25519 -p 37210 root@152.53.82.24

# 确认 ozon-net 网络已存在
docker network ls | grep ozon-net

# 启动容器
docker run -d --name docs --restart unless-stopped \
  -p 127.0.0.1:3030:80 \
  -v /opt/docs:/usr/share/nginx/html:ro \
  --network ozon-net \
  nginx:alpine

# 验证
curl http://127.0.0.1:3030

# 停止旧 PM2 进程
pm2 delete docs
```

### Step 2: B2B
```bash
cd /opt/b2b
# scp ~/B2B/Dockerfile 和 ~/B2B/docker-compose.b2b.yml 到 /opt/b2b/
docker build -t b2b-lead-gen .
kill $(pgrep -f 'b2b.api') || true
docker compose -f docker-compose.b2b.yml up -d
curl http://127.0.0.1:8077/inquiries
```

### Step 3: OZON Apps (核心)
```bash
cd /opt/ozon/app
# scp ~/OZON/Dockerfile 和 ~/OZON/deploy/docker-compose.ozon-apps.yml
docker build -t ozon-monorepo:latest .   # 预计 3-5 分钟
docker compose -f /opt/ozon/docker-compose.ozon-apps.yml up -d

# 验证
curl http://127.0.0.1:3010/login
curl http://127.0.0.1:3020/en
docker logs ozon-brain-worker --tail 20

# 停止旧 PM2 进程 (确认新容器正常后再做)
/usr/bin/node /opt/ozon/app/node_modules/pm2/bin/pm2 delete \
  ozon-web aegiflex-storefront ozon-brain-worker
```

### Step 4: 切换自动部署
```bash
# 稳定后, 把 auto-deploy.docker.sh 设为默认
cp /opt/ozon/app/deploy/auto-deploy.docker.sh /opt/ozon/app/deploy/auto-deploy.sh
```

## 回滚方案

如果 Docker 版本有问题：
```bash
# 停 Docker 容器
docker compose -f /opt/ozon/docker-compose.ozon-apps.yml down

# 重启旧 PM2 进程
cd /opt/ozon/app
/usr/bin/node node_modules/pm2/bin/pm2 start deploy/ecosystem.prod.config.cjs
```

## 内存预算

| 服务 | 限制 | 当前 PM2 |
|------|------|----------|
| ozon-web | 900M | ~283M |
| aegiflex-storefront | 700M | ~191M |
| ozon-brain-worker | 500M | ~160M |
| docs | 128M | ~88M |
| b2b | 256M | ~100M |
| **总计** | ~2.5G | ~800M |

注意: Docker memory limits 是硬上限，不是预留量。实际占用与当前 PM2 相近。

---

## 重要: Storefront 环境变量

生产 `/opt/ozon/.env.production` 缺少 `STOREFRONT_SESSION_SECRET` 和 `STOREFRONT_PREVIEW_SECRET`。
部署 OZON 容器前，必须把它们加进去：

```bash
# 查看本地值
grep "^STOREFRONT_" ~/New\ project/OZON/.env

# SSH 到 VPS，添加到 .env.production
ssh -i ~/.ssh/netcup_space_center_ed25519 -p 37210 root@152.53.82.24
echo 'STOREFRONT_SESSION_SECRET=4876d8f82a59f963526036a5865b24fa43073e5032e4ba8b30d221e62b114ee7' >> /opt/ozon/.env.production
echo 'STOREFRONT_PREVIEW_SECRET=111790f8fcfaf09905e9a684' >> /opt/ozon/.env.production
echo 'NEXT_PUBLIC_STOREFRONT_URL=https://www.aegiflexusa.com' >> /opt/ozon/.env.production
```

或者重新生成 env 文件（会自动包含这些变量）：
```bash
cd /opt/ozon/app
bash deploy/generate-prod-env.sh
# scp 生成的 deploy/.env.production 到 VPS
```

## 总回滚方案

如果 Docker 版有问题，30 秒内恢复 PM2：

```bash
# 停 Docker
docker compose -f /opt/ozon/docker-compose.ozon-apps.yml down
docker stop docs b2b

# 启动 PM2 (旧版)
cd /opt/ozon/app
/usr/bin/node node_modules/pm2/bin/pm2 start deploy/ecosystem.prod.config.cjs

# 旧版 nohup B2B (如需要)
cd /opt/b2b && nohup python3 -m b2b.api > /opt/b2b/b2b.out 2>&1 &
