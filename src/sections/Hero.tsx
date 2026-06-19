"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number; r: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.8 + 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(233, 69, 96, 0.5)";
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
            ctx.strokeStyle = `rgba(83, 52, 131, ${1 - dist / 140})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Spinning wireframe globe with cities on the right side
  useEffect(() => {
    const canvas = document.getElementById("globe-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const dpr = window.devicePixelRatio || 1;
    const size = 380;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = "380px";
    canvas.style.height = "380px";
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = 150;
    const DEG = Math.PI / 180;

    // Major global cities: [name, lat, lng]
    const CITIES: [string, number, number][] = [
      ["Hong Kong", 22.3, 114.2],
      ["Shanghai", 31.2, 121.5],
      ["Tokyo", 35.7, 139.7],
      ["Dubai", 25.2, 55.3],
      ["Singapore", 1.3, 103.8],
      ["London", 51.5, -0.1],
      ["Paris", 48.9, 2.3],
      ["New York", 40.7, -74.0],
      ["Los Angeles", 34.1, -118.2],
      ["Sydney", -33.9, 151.2],
      ["Mumbai", 19.1, 72.9],
      ["Moscow", 55.8, 37.6],
      ["Istanbul", 41.0, 29.0],
      ["Seoul", 37.6, 127.0],
      ["Bangkok", 13.8, 100.5],
      ["Kuala Lumpur", 3.2, 101.7],
      ["Frankfurt", 50.1, 8.7],
      ["Amsterdam", 52.4, 4.9],
      ["San Francisco", 37.8, -122.4],
    ];

    // City lookup by name
    const cityMap = new Map<string, [number, number]>();
    for (const [name, lat, lng] of CITIES) {
      cityMap.set(name, [lat, lng]);
    }

    // Flight routes between cities [cityA, cityB]
    const ROUTES: [string, string][] = [
      ["Hong Kong", "London"],
      ["Hong Kong", "Dubai"],
      ["Hong Kong", "Singapore"],
      ["Hong Kong", "Tokyo"],
      ["Hong Kong", "Sydney"],
      ["Hong Kong", "New York"],
      ["Hong Kong", "San Francisco"],
      ["Shanghai", "Los Angeles"],
      ["Tokyo", "New York"],
      ["Tokyo", "Los Angeles"],
      ["Tokyo", "Seoul"],
      ["Seoul", "London"],
      ["Singapore", "Dubai"],
      ["Singapore", "London"],
      ["Singapore", "Sydney"],
      ["Dubai", "London"],
      ["Dubai", "Mumbai"],
      ["Dubai", "Istanbul"],
      ["London", "New York"],
      ["London", "Paris"],
      ["London", "Frankfurt"],
      ["London", "Amsterdam"],
      ["Paris", "New York"],
      ["New York", "Los Angeles"],
      ["New York", "San Francisco"],
      ["Bangkok", "Singapore"],
      ["Bangkok", "Hong Kong"],
      ["Kuala Lumpur", "Singapore"],
      ["Mumbai", "Dubai"],
      ["Moscow", "London"],
      ["Istanbul", "Moscow"],
      ["Istanbul", "London"],
      ["Frankfurt", "Amsterdam"],
      ["Sydney", "Los Angeles"],
      ["San Francisco", "Tokyo"],
    ];

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      angle += 0.004;

      // ---- Glow ----
      const glow = ctx.createRadialGradient(cx, cy, R - 10, cx, cy, R + 50);
      glow.addColorStop(0, "rgba(233, 69, 96, 0.12)");
      glow.addColorStop(0.5, "rgba(233, 69, 96, 0.04)");
      glow.addColorStop(1, "rgba(233, 69, 96, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, size, size);

      // ---- Globe outline ----
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(233, 69, 96, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ---- Longitude lines ----
      for (let i = 0; i < 16; i++) {
        const theta = (i / 16) * Math.PI * 2 + angle;
        const cosT = Math.cos(theta);
        if (cosT < 0) continue;
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(cosT) * R, R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(233, 69, 96, ${0.06 + 0.12 * cosT})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // ---- Latitude lines ----
      for (let i = -3; i <= 3; i++) {
        if (i === 0) continue;
        const yOff = (i / 3.5) * R;
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOff, Math.sqrt(R * R - yOff * yOff), 4, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(233, 69, 96, 0.06)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Equator
      ctx.beginPath();
      ctx.ellipse(cx, cy, R, 5, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(233, 69, 96, 0.1)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // ---- Flight routes (curved arcs) ----
      const project = (lat: number, lng: number): { px: number; py: number; z: number } | null => {
        const lngRad = lng * DEG;
        const latRad = lat * DEG;
        const rx = lngRad + angle;
        const x3 = Math.cos(latRad) * Math.sin(rx);
        const y3 = Math.sin(latRad);
        const z3 = Math.cos(latRad) * Math.cos(rx);
        if (z3 <= 0) return null;
        return { px: cx + x3 * R, py: cy - y3 * R, z: z3 };
      };

      ctx.lineWidth = 0.6;
      for (const [a, b] of ROUTES) {
        const ca = cityMap.get(a);
        const cb = cityMap.get(b);
        if (!ca || !cb) continue;
        const p1 = project(ca[0], ca[1]);
        const p2 = project(cb[0], cb[1]);
        if (!p1 || !p2) continue;

        // Midpoint with bulge for arc
        const mx = (p1.px + p2.px) / 2;
        const my = (p1.py + p2.py) / 2;
        const dist = Math.sqrt((p2.px - p1.px) ** 2 + (p2.py - p1.py) ** 2);
        const bulge = dist * 0.2;
        const dx = p2.px - p1.px;
        const dy = p2.py - p1.py;
        const nx = -dy / (dist || 1);
        const ny = dx / (dist || 1);
        const cpx = mx + nx * bulge;
        const cpy = my + ny * bulge;

        const avgZ = (p1.z + p2.z) / 2;
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.quadraticCurveTo(cpx, cpy, p2.px, p2.py);
        ctx.strokeStyle = `rgba(233, 69, 96, ${0.04 + 0.12 * avgZ})`;
        ctx.stroke();
      }

      // ---- Cities ----
      for (const [name, lat, lng] of CITIES) {
        // Orthographic projection: rotate longitude by angle
        const lngRad = lng * DEG;
        const latRad = lat * DEG;
        const rotatedLng = lngRad + angle;

        // 3D position on unit sphere
        const x3 = Math.cos(latRad) * Math.sin(rotatedLng);
        const y3 = Math.sin(latRad);
        const z3 = Math.cos(latRad) * Math.cos(rotatedLng);

        // Only draw if on the visible (front) side
        if (z3 <= 0) continue;

        // Project to 2D canvas
        const px = cx + x3 * R;
        const py = cy - y3 * R;

        // Skip if outside globe boundary
        const dist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
        if (dist > R - 2) continue;

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(233, 69, 96, 0.9)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(233, 69, 96, 0.2)";
        ctx.fill();

        // City name
        ctx.font = "10px -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif";
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.textAlign = "center";
        ctx.fillText(name, px, py - 8);
      }

      // Subtle highlight
      const grad = ctx.createRadialGradient(cx - 30, cy - 30, 0, cx, cy, R);
      grad.addColorStop(0, "rgba(233, 69, 96, 0.04)");
      grad.addColorStop(1, "rgba(233, 69, 96, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-deep/40 via-transparent to-deep" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-text-muted backdrop-blur-sm">
              {tr("hero.eyebrow", lang)}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {tr("hero.headline", lang).split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <span className="text-gradient">.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
              {tr("hero.subheadline", lang)}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(233,69,96,0.45)]"
              >
                {tr("hero.cta1", lang)}
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                {tr("hero.cta2", lang)}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-coral/10 blur-3xl" />
              <div className="absolute h-48 w-48 rounded-full bg-violet-deep/10 blur-2xl" />
              <canvas id="globe-canvas" width="380" height="380" className="relative h-auto w-[380px]" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t from-deep to-transparent" />
    </section>
  );
}
