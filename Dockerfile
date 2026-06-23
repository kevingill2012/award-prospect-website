# Stage 1: Build the Next.js static export
FROM node:22-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Dependencies layer (cached unless package.json changes)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Source + build
COPY . .
RUN pnpm build

# Restructure HTML for clean URLs
RUN cd out \
  && for page in privacy terms cookies; do \
       rm -rf "$page" && mkdir -p "$page" && mv "$page.html" "$page/index.html"; \
     done \
  && rm -rf _not-found && mkdir -p _not-found \
  && (mv 404.html _not-found/index.html 2>/dev/null || true) \
  && (mv _not-found.html _not-found/index.html 2>/dev/null || true)

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
