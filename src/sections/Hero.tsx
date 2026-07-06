"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, BarChart3, CirclePlay, Globe2, Warehouse } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr, type Lang } from "@/lib/i18n";

const CITY_COORDS = {
  "Hong Kong": [22.3, 114.2],
  London: [51.5, -0.1],
  Dubai: [25.2, 55.3],
  Singapore: [1.3, 103.8],
  Tokyo: [35.7, 139.7],
  Sydney: [-33.9, 151.2],
  "New York": [40.7, -74.0],
  "San Francisco": [37.8, -122.4],
  Seoul: [37.6, 127.0],
  Bangkok: [13.8, 100.5],
  Shanghai: [31.2, 121.5],
} as const;

type CityName = keyof typeof CITY_COORDS;

type RouteLane = {
  id: string;
  from: CityName;
  to: CityName;
  labelKey: string;
  detailKey: string;
  statusKey: string;
};

const ROUTE_LANES: RouteLane[] = [
  {
    id: "hk-london",
    from: "Hong Kong",
    to: "London",
    labelKey: "hero.route.1.label",
    detailKey: "hero.route.1.detail",
    statusKey: "hero.route.status.ready",
  },
  {
    id: "hk-dubai",
    from: "Hong Kong",
    to: "Dubai",
    labelKey: "hero.route.2.label",
    detailKey: "hero.route.2.detail",
    statusKey: "hero.route.status.live",
  },
  {
    id: "hk-singapore",
    from: "Hong Kong",
    to: "Singapore",
    labelKey: "hero.route.3.label",
    detailKey: "hero.route.3.detail",
    statusKey: "hero.route.status.fast",
  },
  {
    id: "hk-tokyo",
    from: "Hong Kong",
    to: "Tokyo",
    labelKey: "hero.route.4.label",
    detailKey: "hero.route.4.detail",
    statusKey: "hero.route.status.verified",
  },
];

const SECONDARY_ROUTES: [CityName, CityName][] = [
  ["Hong Kong", "Sydney"],
  ["Hong Kong", "New York"],
  ["Hong Kong", "San Francisco"],
  ["Shanghai", "Tokyo"],
  ["Singapore", "Dubai"],
  ["Tokyo", "Seoul"],
  ["Bangkok", "Singapore"],
  ["Dubai", "London"],
];

const HERO_CARDS = [
  {
    id: "sourcing",
    number: "01",
    image: "/images/stock/products/beauty-products-display-03.jpg",
    icon: Globe2,
    titleKey: "cap.1.title",
    textKey: "cap.1.tagline",
    stats: [
      ["200,000+", "hero.card.1.stat.1"],
      ["18+", "hero.card.1.stat.2"],
    ],
  },
  {
    id: "logistics",
    number: "02",
    image: "/images/stock/logistics/warehouse-forklift2-17.jpg",
    icon: Warehouse,
    titleKey: "cap.2.title",
    textKey: "cap.2.tagline",
    stats: [
      ["1.2M+", "hero.card.2.stat.1"],
      ["24/7", "hero.card.2.stat.2"],
    ],
  },
  {
    id: "distribution",
    number: "03",
    image: "/images/stock/hk/hk-night-lights-08.jpg",
    icon: BarChart3,
    titleKey: "cap.3.title",
    textKey: "cap.3.tagline",
    stats: [
      ["30+", "hero.card.3.stat.1"],
      ["150+", "hero.card.3.stat.2"],
    ],
  },
];

const STAT_VALUE_LABELS: Partial<Record<Lang, Record<string, string>>> = {
  "zh-CN": {
    "200,000+": "20万+",
    "1.2M+": "120万+",
    "24/7": "全天候",
  },
  "zh-TW": {
    "200,000+": "20萬+",
    "1.2M+": "120萬+",
    "24/7": "全天候",
  },
  ar: {
    "200,000+": "+٢٠٠ ألف",
    "1.2M+": "+١٫٢ مليون",
    "24/7": "على مدار الساعة",
    "30+": "+٣٠",
    "150+": "+١٥٠",
    "18+": "+١٨",
  },
};

function statValue(value: string, lang: Lang) {
  return STAT_VALUE_LABELS[lang]?.[value] ?? value;
}

function quadraticPoint(
  start: { x: number; y: number },
  control: { x: number; y: number },
  end: { x: number; y: number },
  t: number,
) {
  const mt = 1 - t;
  return {
    x: mt * mt * start.x + 2 * mt * t * control.x + t * t * end.x,
    y: mt * mt * start.y + 2 * mt * t * control.y + t * t * end.y,
  };
}

function renderHeadlineLine(line: string) {
  const highlights = ["Trust.", "信任", "الثقة"];
  const match = highlights.find((term) => line.includes(term));
  if (!match) return line;
  const [before, after] = line.split(match);
  return (
    <>
      {before}
      <span className="text-coral">{match}</span>
      {after}
    </>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const particleRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<HTMLCanvasElement>(null);
  const [activeRouteId, setActiveRouteId] = useState(ROUTE_LANES[0].id);
  const [paused, setPaused] = useState(false);
  const shouldEqualizeHeroCards = lang === "en";
  const heroCardTitleClass = shouldEqualizeHeroCards
    ? "whitespace-nowrap text-[1.35rem] leading-tight tracking-normal xl:text-2xl"
    : "text-2xl";

  const activeRoute = useMemo(
    () => ROUTE_LANES.find((route) => route.id === activeRouteId) ?? ROUTE_LANES[0],
    [activeRouteId],
  );

  useEffect(() => {
    const canvas = particleRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animId = 0;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.8 + 0.4,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(233, 69, 96, 0.42)";
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(83, 52, 131, ${(1 - dist / 140) * 0.85})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      if (!prefersReducedMotion) animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const canvas = globeRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = window.devicePixelRatio || 1;
    const size = 440;
    const cx = size / 2;
    const cy = size / 2;
    const radius = 172;
    const deg = Math.PI / 180;
    let angle = -1.05;
    let animId = 0;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const project = (city: CityName) => {
      const [lat, lng] = CITY_COORDS[city];
      const lngRad = lng * deg + angle;
      const latRad = lat * deg;
      const x3 = Math.cos(latRad) * Math.sin(lngRad);
      const y3 = Math.sin(latRad);
      const z3 = Math.cos(latRad) * Math.cos(lngRad);
      return {
        x: cx + x3 * radius,
        y: cy - y3 * radius,
        z: z3,
      };
    };

    const drawRoute = (
      from: CityName,
      to: CityName,
      selected: boolean,
      time: number,
    ) => {
      const p1 = project(from);
      const p2 = project(to);
      if (p1.z < -0.35 || p2.z < -0.35) return;

      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const normal = { x: -dy / (dist || 1), y: dx / (dist || 1) };
      const control = {
        x: (p1.x + p2.x) / 2 + normal.x * dist * 0.2,
        y: (p1.y + p2.y) / 2 + normal.y * dist * 0.2,
      };
      const depth = Math.max(0.18, (p1.z + p2.z + 0.8) / 2.8);

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.quadraticCurveTo(control.x, control.y, p2.x, p2.y);
      ctx.strokeStyle = selected
        ? `rgba(233, 69, 96, ${0.7 + depth * 0.25})`
        : `rgba(233, 69, 96, ${0.07 + depth * 0.1})`;
      ctx.lineWidth = selected ? 2.2 : 0.7;
      ctx.stroke();

      if (selected && !prefersReducedMotion) {
        const t = (time / 1900) % 1;
        const dot = quadraticPoint({ x: p1.x, y: p1.y }, control, { x: p2.x, y: p2.y }, t);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 220, 225, 0.96)";
        ctx.shadowColor = "rgba(233, 69, 96, 0.75)";
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const drawCity = (city: CityName, selected: boolean) => {
      const p = project(city);
      if (p.z < -0.12) return;
      const alpha = 0.35 + p.z * 0.65;
      ctx.beginPath();
      ctx.arc(p.x, p.y, selected ? 5.5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = selected
        ? "rgba(233, 69, 96, 0.95)"
        : `rgba(234, 234, 234, ${alpha * 0.75})`;
      ctx.fill();
      if (selected) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(233, 69, 96, 0.28)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    };

    const draw = (time = 0) => {
      ctx.clearRect(0, 0, size, size);
      if (!paused && !prefersReducedMotion) angle += 0.0034;

      const glow = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.3);
      glow.addColorStop(0, "rgba(233, 69, 96, 0.16)");
      glow.addColorStop(0.5, "rgba(83, 52, 131, 0.08)");
      glow.addColorStop(1, "rgba(233, 69, 96, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, size, size);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      for (let i = -3; i <= 3; i++) {
        const y = cy + (i / 4) * radius;
        const w = Math.sqrt(Math.max(0, radius * radius - (y - cy) ** 2));
        ctx.beginPath();
        ctx.ellipse(cx, y, w, 5, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(234, 234, 234, 0.055)";
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      for (let i = 0; i < 18; i++) {
        const phase = (i / 18) * Math.PI * 2 + angle;
        const w = Math.abs(Math.cos(phase)) * radius;
        ctx.beginPath();
        ctx.ellipse(cx, cy, w, radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(233, 69, 96, ${0.035 + Math.abs(Math.cos(phase)) * 0.08})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      for (const [from, to] of SECONDARY_ROUTES) {
        drawRoute(from, to, false, time);
      }
      for (const route of ROUTE_LANES) {
        drawRoute(route.from, route.to, route.id === activeRoute.id, time);
      }

      (Object.keys(CITY_COORDS) as CityName[]).forEach((city) => {
        drawCity(city, city === activeRoute.from || city === activeRoute.to);
      });
      ctx.restore();

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(233, 69, 96, 0.36)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius + 18, -0.45, 1.85);
      ctx.strokeStyle = "rgba(234, 234, 234, 0.12)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      if (!prefersReducedMotion) animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [activeRoute, paused]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <canvas ref={particleRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="tech-grid absolute inset-0 z-[1] opacity-25" aria-hidden="true" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-deep/30 via-deep/30 to-deep" />

      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-10 pt-24 lg:pb-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-coral">
              {tr("hero.eyebrow", lang)}
              <span className="hidden h-px w-16 bg-coral/50 sm:block" />
            </span>
            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem] xl:text-[4.2rem]">
              {tr("hero.headline", lang).split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {renderHeadlineLine(line)}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl lg:max-w-lg">
              {tr("hero.subheadline", lang)}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="focus-tech inline-flex items-center gap-3 rounded-md bg-coral px-8 py-4 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(233,69,96,0.45)]"
              >
                {tr("hero.cta1", lang)}
                <ArrowDown size={16} />
              </a>
              <a
                href="#traceability"
                className="focus-tech inline-flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-text-primary backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <CirclePlay className="h-5 w-5" />
                {tr("hero.cta2", lang)}
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl gap-6 sm:grid-cols-3">
              {[
                ["50+", "hero.metric.1.label"],
                ["300+", "hero.metric.2.label"],
                ["98.2%", "hero.metric.3.label"],
              ].map(([value, labelKey]) => (
                <div key={labelKey} className="border-white/15 sm:border-e sm:pe-6 last:border-0">
                  <p className="font-display text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-text-muted">{tr(labelKey, lang)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:-mt-14 lg:block"
          >
            <div
              className="relative ms-auto min-h-[560px] max-w-[760px] overflow-visible rounded-[2rem]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                <img
                  src="/images/concepts/hero-globe-asset.png"
                  alt=""
                  className="h-full w-full object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-deep/10 via-transparent to-deep/20" />
              </div>
              <canvas
                ref={globeRef}
                width="440"
                height="440"
                className="pointer-events-none absolute left-[23%] top-[15%] h-auto w-[48%] max-w-[440px] opacity-20 mix-blend-screen"
                aria-label={tr("hero.globeLabel", lang)}
              />

              <div className="absolute right-0 top-[30%] z-10 grid w-[150px] gap-3">
                {ROUTE_LANES.map((route) => {
                  const active = route.id === activeRoute.id;
                  return (
                    <button
                      key={route.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setActiveRouteId(route.id)}
                      className={`focus-tech group flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-start backdrop-blur-md transition-all ${
                        active
                          ? "border-coral/65 bg-coral/15 text-text-primary shadow-[0_0_24px_rgba(233,69,96,0.24)]"
                          : "border-white/12 bg-deep/55 text-text-muted hover:border-white/24 hover:bg-white/[0.07]"
                      }`}
                    >
                      <span>
                        <span className="block font-display text-xs font-semibold">{tr(route.labelKey, lang)}</span>
                        <span className="mt-0.5 block text-[10px] leading-tight text-text-muted">
                          {tr(route.statusKey, lang)}
                        </span>
                      </span>
                      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-coral" : "bg-white/25"}`} />
                    </button>
                  );
                })}
              </div>

              <div className="absolute bottom-5 right-5 z-10 flex items-center gap-3 text-xs text-text-muted">
                <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_14px_rgba(233,69,96,0.9)]" />
                {tr("hero.network.live", lang)}
                <span className="h-4 w-px bg-white/20" />
                {tr("hero.network.updated", lang)}
              </div>

              <div className="absolute left-6 top-6 z-10 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-deep/45 px-5 py-4 backdrop-blur">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">
                    {tr("hero.liveLane", lang)}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">
                    {tr(activeRoute.labelKey, lang)}
                  </p>
                </div>
                <div className="rounded-full border border-coral/25 bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                  {tr(activeRoute.statusKey, lang)}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        <div className={`mt-5 grid gap-5 lg:grid-cols-3 ${shouldEqualizeHeroCards ? "items-stretch" : "items-start"}`}>
          {HERO_CARDS.map(({ id, number, image, icon: Icon, titleKey, textKey, stats }) => (
            <a
              key={id}
              href="#capabilities"
              className={`group relative min-h-[260px] overflow-hidden rounded-xl border border-white/12 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_0_32px_rgba(233,69,96,0.16)] ${
                shouldEqualizeHeroCards ? "h-full" : ""
              }`}
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/78 to-deep/35" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-lg font-semibold text-coral">{number}</span>
                  <span className="rounded-full border border-coral/30 bg-deep/70 p-3 text-coral">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className={`mt-8 font-display font-semibold ${heroCardTitleClass}`}>
                  {tr(titleKey, lang)}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">{tr(textKey, lang)}</p>
                <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
                  {stats.map(([value, labelKey]) => (
                    <div key={labelKey} className="border-s border-white/10 ps-4 first:border-0 first:ps-0">
                      <p className="font-display text-2xl font-semibold text-coral">{statValue(value, lang)}</p>
                      <p className="mt-1 text-xs text-text-muted">{tr(labelKey, lang)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t from-deep to-transparent" />
    </section>
  );
}
