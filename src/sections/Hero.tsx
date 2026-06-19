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

    // Simplified continent outlines [name, [[lat,lng], ...]]
    const CONTINENTS: [string, number[][]][] = [
      ["North America", [
        [48,-125],[45,-124],[41,-124],[38,-122],[35,-120],[33,-117],[32,-114],[31,-110],
        [29,-104],[26,-99],[25,-97],[25,-94],[28,-82],[30,-81],[30,-84],[32,-80],
        [33,-79],[35,-76],[37,-76],[38,-74],[40,-74],[40,-73],[41,-71],[41,-70],
        [42,-70],[43,-69],[44,-67],[45,-67],[45,-66],[44,-68],[43,-69],[44,-66],
        [45,-63],[46,-61],[47,-60],[47,-65],[48,-67],[48,-69],[47,-71],[46,-71],
        [45,-72],[43,-70],[42,-72],[41,-73],[40,-76],[39,-76],[39,-78],[38,-75],
        [39,-73],[38,-76],[38,-80],[37,-77],[36,-76],[34,-79],[32,-82],[30,-83],
        [29,-86],[28,-82],[26,-80],[25,-81],[26,-83],[26,-86],[28,-88],[28,-91],
        [29,-95],[29,-98],[29,-101],[30,-104],[30,-107],[31,-109],[32,-111],
        [33,-113],[34,-115],[35,-117],[37,-120],[38,-121],[39,-122],[40,-124],
        [42,-124],[44,-124],[46,-124],[48,-123],[48,-122],[48,-125],
      ]],
      ["South America", [
        [12,-69],[11,-72],[10,-75],[8,-77],[6,-77],[3,-77],[1,-78],[-1,-80],
        [-3,-80],[-5,-79],[-7,-78],[-9,-78],[-11,-77],[-13,-77],[-15,-76],
        [-17,-75],[-19,-74],[-21,-73],[-23,-72],[-25,-71],[-27,-70],[-29,-71],
        [-31,-71],[-33,-72],[-34,-71],[-34,-68],[-33,-67],[-31,-66],[-29,-65],
        [-27,-64],[-25,-63],[-23,-62],[-21,-61],[-19,-60],[-17,-59],[-15,-57],
        [-13,-55],[-11,-53],[-9,-51],[-7,-49],[-5,-47],[-3,-45],[-1,-46],[-1,-44],
        [1,-45],[2,-47],[4,-48],[5,-48],[5,-47],[3,-44],[2,-42],[1,-40],[-1,-39],
        [-1,-41],[1,-42],[2,-44],[3,-45],[5,-47],[7,-48],[8,-48],[9,-46],[10,-44],
        [10,-40],[10,-38],[10,-42],[11,-44],[11,-46],[10,-48],[11,-50],[11,-54],
        [11,-56],[11,-58],[10,-60],[10,-62],[11,-64],[11,-67],[12,-69],
      ]],
      ["Europe", [
        [36,-5],[37,-6],[38,-9],[40,-8],[42,-8],[43,-7],[43,-1],[44,0],[44,3],
        [45,5],[46,7],[46,9],[47,10],[47,12],[48,14],[48,16],[49,17],[50,18],
        [51,20],[52,22],[53,22],[54,20],[54,19],[54,16],[55,15],[55,13],[56,12],
        [56,10],[55,8],[55,6],[56,5],[56,8],[57,10],[58,11],[59,11],[60,10],
        [60,8],[59,6],[58,5],[57,5],[56,4],[55,3],[55,1],[54,0],[54,-2],[53,-2],
        [52,-3],[51,-4],[50,-4],[49,-2],[48,-3],[47,-3],[46,-4],[46,-2],[45,-1],
        [44,-3],[43,-4],[42,-5],[41,-5],[40,-4],[39,-4],[38,-3],[37,-3],[37,-5],
        [36,-5],
      ]],
      ["Africa", [
        [37,10],[37,9],[36,10],[36,11],[35,9],[35,11],[34,11],[34,10],[33,10],
        [33,9],[33,12],[34,12],[32,13],[32,15],[31,15],[31,17],[30,18],[30,20],
        [29,21],[28,21],[27,20],[26,20],[25,19],[24,18],[23,17],[22,17],[21,18],
        [20,19],[19,20],[18,20],[17,19],[16,19],[15,18],[14,18],[13,17],[12,17],
        [11,16],[10,16],[9,15],[8,14],[7,13],[6,13],[5,12],[4,11],[3,11],[2,10],
        [1,10],[0,10],[-1,10],[-2,10],[-3,10],[-4,10],[-5,11],[-6,11],[-7,11],
        [-8,11],[-9,11],[-10,11],[-11,12],[-12,12],[-13,12],[-14,13],[-15,13],
        [-16,13],[-17,13],[-18,13],[-19,13],[-20,14],[-21,15],[-22,16],[-23,17],
        [-24,17],[-25,17],[-26,17],[-27,18],[-28,17],[-29,17],[-30,17],[-31,18],
        [-32,18],[-33,18],[-34,18],[-34,19],[-34,20],[-33,22],[-32,23],[-31,24],
        [-30,25],[-29,26],[-28,27],[-27,28],[-26,28],[-25,27],[-24,26],[-23,25],
        [-22,24],[-21,23],[-20,22],[-19,22],[-18,22],[-17,22],[-16,22],[-15,21],
        [-14,20],[-13,19],[-12,18],[-11,19],[-10,21],[-9,22],[-8,23],[-7,23],
        [-6,24],[-5,25],[-4,24],[-3,23],[-2,22],[-1,21],[0,20],[1,20],[2,20],
        [3,19],[4,17],[5,17],[6,16],[7,16],[8,16],[9,17],[10,17],[11,18],[12,18],
        [13,17],[14,17],[15,17],[16,16],[17,15],[18,14],[19,12],[20,11],[21,10],
        [22,9],[23,8],[24,9],[25,9],[26,9],[27,9],[28,9],[29,9],[30,9],[31,9],
        [32,9],[33,9],[34,10],[35,10],[36,10],[37,10],
      ]],
      ["Asia", [
        [42,28],[42,30],[43,30],[43,32],[42,33],[42,35],[43,35],[43,37],[44,37],
        [44,39],[45,39],[45,40],[46,40],[46,42],[47,42],[47,43],[48,43],[48,44],
        [49,45],[50,45],[51,46],[52,46],[53,47],[54,47],[55,48],[55,50],[56,52],
        [56,55],[57,57],[58,58],[58,60],[57,60],[57,62],[56,63],[55,63],[54,63],
        [53,63],[52,62],[51,61],[50,60],[49,59],[48,59],[47,58],[46,58],[45,57],
        [44,57],[43,56],[42,56],[42,55],[41,55],[40,54],[39,54],[38,54],[37,54],
        [37,56],[36,57],[35,58],[34,59],[34,60],[35,61],[36,62],[37,63],[38,64],
        [39,65],[40,66],[41,67],[41,69],[42,70],[42,72],[43,73],[43,75],[42,77],
        [42,78],[43,80],[43,81],[44,82],[44,84],[45,86],[45,88],[46,90],[46,92],
        [47,94],[47,96],[48,98],[48,100],[48,102],[49,104],[49,106],[50,108],
        [50,110],[51,112],[51,114],[52,116],[52,118],[53,120],[53,122],[54,124],
        [54,126],[55,128],[55,130],[56,132],[56,134],[56,136],[55,138],[54,139],
        [53,140],[52,140],[52,141],[51,140],[50,140],[50,139],[49,139],[48,139],
        [47,138],[46,137],[45,137],[44,137],[43,137],[42,137],[41,138],[40,139],
        [40,140],[39,141],[38,141],[37,142],[36,142],[35,142],[34,141],[33,141],
        [32,141],[31,141],[30,142],[29,143],[28,143],[27,144],[26,145],[25,145],
        [24,146],[23,147],[22,148],[21,149],[20,150],[19,151],[18,152],[17,153],
        [16,154],[15,155],[14,156],[13,157],[12,158],[11,159],[10,160],[9,161],
        [8,162],[7,163],[6,164],[5,165],[4,166],[3,167],[2,168],[1,169],
        [1,170],[0,171],[-1,172],[-2,172],[-3,171],[-4,171],[-5,170],[-6,169],
        [-7,168],[-8,167],[-9,166],[-10,165],[-11,164],[-12,163],[-13,162],
        [-14,161],[-15,160],[-16,159],[-17,158],[-18,157],[-19,156],[-20,155],
        [-21,154],[-22,153],[-23,152],[-24,151],[-25,150],[-26,149],[-27,148],
        [-28,147],[-29,146],[-30,145],[-31,144],[-32,143],[-33,142],[-34,141],
        [-35,140],[-36,139],[-37,138],[-38,137],[-39,136],[-40,135],
        [42,28],[42,29],[41,28],[41,29],[42,28],
      ]],
      ["Australia", [
        [-12,142],[-12,143],[-13,143],[-14,144],[-15,144],[-16,145],[-17,145],
        [-18,146],[-19,147],[-20,148],[-21,149],[-22,150],[-23,151],[-24,152],
        [-25,153],[-26,154],[-27,155],[-28,156],[-29,157],[-30,158],[-31,159],
        [-32,160],[-33,161],[-34,162],[-35,163],[-36,164],[-37,165],[-38,166],
        [-39,167],[-39,168],[-38,169],[-37,169],[-36,168],[-35,169],[-34,168],
        [-33,168],[-32,167],[-31,167],[-30,166],[-29,165],[-28,165],[-27,164],
        [-26,164],[-25,163],[-24,163],[-23,162],[-22,162],[-21,161],[-20,161],
        [-19,161],[-18,162],[-17,163],[-16,164],[-15,164],[-16,163],[-16,162],
        [-15,161],[-14,162],[-13,163],[-12,162],[-11,161],[-11,160],[-10,159],
        [-10,158],[-10,157],[-10,156],[-10,155],[-10,154],[-10,153],[-10,152],
        [-10,151],[-11,150],[-11,149],[-11,148],[-11,147],[-11,146],[-11,145],
        [-11,144],[-11,143],[-11,142],[-12,142],
      ]],
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

      // ---- Continents (filled polygons) ----
      const project3 = (lat: number, lng: number): { px: number; py: number; z: number } | null => {
        const lngRad = lng * DEG;
        const latRad = lat * DEG;
        const rx = lngRad + angle;
        const x3 = Math.cos(latRad) * Math.sin(rx);
        const y3 = Math.sin(latRad);
        const z3 = Math.cos(latRad) * Math.cos(rx);
        if (z3 <= 0) return null;
        return { px: cx + x3 * R, py: cy - y3 * R, z: z3 };
      };

      ctx.lineWidth = 0.3;
      for (const [, points] of CONTINENTS) {
        ctx.beginPath();
        let started = false;
        for (const [lat, lng] of points) {
          const p = project3(lat, lng);
          if (!p) { started = false; continue; }
          if (!started) { ctx.moveTo(p.px, p.py); started = true; }
          else ctx.lineTo(p.px, p.py);
        }
        ctx.closePath();
        ctx.fillStyle = "rgba(233, 69, 96, 0.06)";
        ctx.fill();
        ctx.strokeStyle = "rgba(233, 69, 96, 0.12)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

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
