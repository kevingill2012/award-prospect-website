"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Baby,
  BadgeCheck,
  Boxes,
  FileDown,
  Globe2,
  Handshake,
  Headphones,
  HeartPulse,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr, type Lang } from "@/lib/i18n";

const CATEGORIES = [
  { id: "health", key: "partners.category.health", icon: HeartPulse },
  { id: "beauty", key: "partners.category.beauty", icon: Sparkles },
  { id: "personal", key: "partners.category.personal", icon: Boxes },
  { id: "mother", key: "partners.category.mother", icon: Baby },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const CATEGORY_BRANDS: Record<CategoryId, Record<Lang, string[]>> = {
  health: {
    en: ["Swisse", "Blackmores", "Bio Island", "Centrum", "Nature's Way", "A2 Milk Co."],
    "zh-CN": ["斯维诗", "澳佳宝", "佰澳朗德", "善存", "自然之路", "澳洲乳品"],
    "zh-TW": ["斯維詩", "澳佳寶", "佰澳朗德", "善存", "自然之路", "澳洲乳品"],
    ar: ["سويس", "بلاكمورز", "بيو آيلاند", "سنتروم", "نيتشرز واي", "شركة إيه تو للحليب"],
  },
  beauty: {
    en: ["DHC", "L'Oreal", "The Ordinary", "CeraVe", "Friday Lab", "La Mer"],
    "zh-CN": ["蝶翠诗", "欧莱雅", "功效护肤", "适乐肤", "星期五实验室", "海蓝之谜"],
    "zh-TW": ["蝶翠詩", "歐萊雅", "功效護膚", "適樂膚", "星期五實驗室", "海藍之謎"],
    ar: ["دي إتش سي", "لوريال", "ذا أورديناري", "سيرا في", "فرايداي لاب", "لا مير"],
  },
  personal: {
    en: ["QV", "Nivea", "Vaseline", "Bioderma", "Avene", "La Roche-Posay"],
    "zh-CN": ["温和护理", "妮维雅", "凡士林", "贝德玛", "雅漾", "理肤泉"],
    "zh-TW": ["溫和護理", "妮維雅", "凡士林", "貝德瑪", "雅漾", "理膚泉"],
    ar: ["كيو في", "نيفيا", "فازلين", "بيوديرما", "أفين", "لاروش بوزيه"],
  },
  mother: {
    en: ["Aptamil", "Bellamy's", "Bio Island", "Maxigenes", "A2 Milk Co."],
    "zh-CN": ["爱他美", "贝拉米", "佰澳朗德", "美可卓", "澳洲乳品"],
    "zh-TW": ["愛他美", "貝拉米", "佰澳朗德", "美可卓", "澳洲乳品"],
    ar: ["أبتاميل", "بيلاميز", "بيو آيلاند", "ماكسيجينز", "شركة إيه تو للحليب"],
  },
};

const TRUSTED_BRANDS = [
  "Swisse",
  "Blackmores",
  "Bio Island",
  "Centrum",
  "Nature's Way",
  "DHC",
  "L'Oreal",
  "The Ordinary",
  "CeraVe",
  "A2 Milk Co.",
];

const INSIGHTS = [
  ["partners.insight.1.region", "+24%", "partners.insight.1.label"],
  ["partners.insight.2.region", "+18%", "partners.insight.2.label"],
  ["partners.insight.3.region", "+32%", "partners.insight.3.label"],
];

const DESTINATIONS = [
  ["partners.dest.chinaShort", "partners.dest.chinaMeta"],
  ["partners.dest.japan", "partners.dest.japanMeta"],
  ["partners.dest.korea", "partners.dest.koreaMeta"],
  ["partners.dest.sea", "partners.dest.seaMeta"],
  ["partners.dest.gcc", "partners.dest.gccMeta"],
];

const FEATURE_ITEMS = [
  { icon: Globe2, titleKey: "partners.feature.1.title", textKey: "partners.feature.1.text" },
  { icon: Truck, titleKey: "partners.feature.2.title", textKey: "partners.feature.2.text" },
  { icon: Users, titleKey: "partners.feature.3.title", textKey: "partners.feature.3.text" },
  { icon: Handshake, titleKey: "partners.feature.4.title", textKey: "partners.feature.4.text" },
];

function BrandTicker({ items, paused }: { items: string[]; paused: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-9 px-5 py-5 animate-marquee"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...items, ...items, ...items].map((brand, idx) => (
          <span
            key={`${brand}-${idx}`}
            className="whitespace-nowrap font-display text-base font-semibold text-[#e8b6ff] sm:text-lg"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const mapCanvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<CategoryId>("health");
  const [paused, setPaused] = useState(false);
  const activeBrands = CATEGORY_BRANDS[activeCategory][lang];
  const activeCategoryLabel = tr(CATEGORIES.find((category) => category.id === activeCategory)?.key ?? "partners.category.health", lang);

  useEffect(() => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    const image = new Image();

    const drawPill = (
      x: number,
      y: number,
      text: string,
      options: { active?: boolean } = {},
    ) => {
      const width = Math.max(84, Math.min(134, text.length * 7 + 34));
      const height = 25;
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(x, y, width, height, 12);
      ctx.fillStyle = options.active ? "rgba(233,69,96,0.18)" : "rgba(12,18,43,0.82)";
      ctx.fill();
      ctx.strokeStyle = options.active ? "rgba(233,69,96,0.72)" : "rgba(255,255,255,0.18)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + 14, y + height / 2, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#ff5f65";
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.88)";
      ctx.font = "600 12px Inter, sans-serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillText(text, x + 26, y + height / 2 + 0.5, width - 32);
      ctx.restore();
    };

    const draw = () => {
      if (cancelled) return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);

      if (activeCategory === "health") return;

      ctx.save();
      ctx.fillStyle = "rgba(5, 11, 31, 0.78)";
      ctx.fillRect(22, 70, 270, 254);
      ctx.fillStyle = "rgba(83, 52, 131, 0.22)";
      ctx.fillRect(22, 70, 270, 254);
      ctx.fillStyle = "#ff5f65";
      ctx.font = "700 12px Inter, sans-serif";
      ctx.textBaseline = "top";
      ctx.textAlign = lang === "ar" ? "right" : "left";
      ctx.direction = lang === "ar" ? "rtl" : "ltr";
      ctx.fillText(activeCategoryLabel, lang === "ar" ? 276 : 38, 84);
      ctx.restore();

      const positions = [
        [38, 114],
        [154, 114],
        [38, 156],
        [154, 156],
        [38, 198],
        [154, 198],
      ];
      activeBrands.slice(0, 6).forEach((brand, index) => {
        const [x, y] = positions[index];
        drawPill(x, y, brand, { active: index === 0 });
      });
    };

    image.onload = draw;
    image.src = "/images/concepts/market-map-asset.png";

    const resizeObserver = new ResizeObserver(draw);
    resizeObserver.observe(canvas);

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
    };
  }, [activeBrands, activeCategory, activeCategoryLabel, lang]);

  return (
    <section id="partners" className="relative overflow-hidden pb-20 pt-10">
      <div
        className="absolute inset-x-0 top-0 h-[330px] overflow-hidden sm:h-[360px]"
        aria-hidden="true"
      >
        <img
          src="/images/concepts/market-skyline-asset.png"
          alt=""
          className="h-full w-full object-cover object-left opacity-[0.86]"
        />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-deep" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-deep" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep/44 via-deep/58 to-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/62 to-transparent" />
      <div className="tech-grid absolute inset-0 opacity-15" aria-hidden="true" />

      <div className="relative mx-auto max-w-[92rem] px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coral">
            {tr("partners.eyebrow", lang)}
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold leading-[1.08] sm:text-[3.35rem]">
            {tr("partners.hero.line1", lang)}
            <br />
            {tr("partners.hero.line2.prefix", lang)} <span className="text-coral">{tr("partners.hero.line2.highlight", lang)}</span>
          </h2>
          <p className="mt-2 max-w-xl text-base leading-snug text-text-muted">
            {tr("partners.subtitle", lang)}
          </p>
          <div className="mt-3 grid max-w-3xl gap-4 sm:grid-cols-4">
            {[
              ["500+", "partners.stat.1.label"],
              ["120+", "partners.stat.2.label"],
              ["35+", "partners.stat.3.label"],
              ["15+", "partners.stat.4.label"],
            ].map(([value, labelKey]) => (
              <div key={labelKey} className="border-s border-white/12 ps-4 first:border-0 first:ps-0">
                <p className="font-display text-2xl font-semibold text-coral">{value}</p>
                <p className="mt-1 text-xs text-text-muted">{tr(labelKey, lang)}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 grid items-start gap-3 lg:grid-cols-[260px_minmax(0,1fr)_260px] xl:grid-cols-[260px_minmax(0,1fr)_280px]">
          <div className="h-[404px] rounded-xl border border-white/10 bg-deep/68 p-4 backdrop-blur-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c8b7ff]">
              {tr("partners.explore", lang)}
            </p>
            <div className="grid gap-3">
              {CATEGORIES.map(({ id, key, icon: Icon }) => {
                const active = activeCategory === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(id)}
                    className={`focus-tech flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-start text-sm transition-all ${
                      active
                        ? "border-violet-300/60 bg-violet-deep/60 text-white shadow-[0_0_24px_rgba(148,93,255,0.25)]"
                        : "border-white/10 bg-white/[0.035] text-text-muted hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {tr(key, lang)}
                    </span>
                    <span>›</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-9 w-9 text-white" />
                <div>
                  <p className="text-sm font-semibold text-white">{tr("partners.quality.title", lang)}</p>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted">
                    {tr("partners.quality.text", lang)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[404px] overflow-hidden rounded-xl border border-white/10 bg-deep/70 backdrop-blur-xl">
            <div className="absolute inset-0">
              <canvas
                ref={mapCanvasRef}
                className="h-full w-full"
                aria-label={tr("partners.mapLabel", lang)}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep/10 via-transparent to-deep/5" />
            </div>
            <div className="relative z-10 h-full p-4">
              {DESTINATIONS.map(([nameKey, metaKey], index) => (
                <button
                  key={nameKey}
                  type="button"
                  aria-label={`${tr(nameKey, lang)}: ${tr(metaKey, lang)}`}
                  className="focus-tech absolute right-[2%] h-12 w-[18%] rounded-xl border border-transparent bg-transparent transition-colors hover:border-violet-300/35 hover:bg-violet-deep/15"
                  style={{ top: `${15 + index * 14.8}%` }}
                />
              ))}
            </div>
          </div>

          <div className="flex min-h-[404px] flex-col overflow-hidden rounded-xl border border-white/10 bg-deep/68 p-4 backdrop-blur-xl lg:h-[404px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c8b7ff]">
              {tr("partners.insights", lang)}
            </p>
            <div className="grid min-h-0 flex-1 grid-rows-3 gap-3">
              {INSIGHTS.map(([regionKey, value, labelKey]) => (
                <div key={regionKey} className="flex min-h-0 flex-col justify-center rounded-lg border border-violet-300/20 bg-violet-deep/30 p-3">
                  <p className="text-xs text-[#ded6ff]">{tr(regionKey, lang)}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-coral">{value}</p>
                  <p className="mt-1 text-[11px] text-text-muted">{tr(labelKey, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-4 overflow-hidden rounded-xl border border-white/12 bg-violet-deep/18 backdrop-blur-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid items-center lg:grid-cols-[220px_1fr_56px]">
            <p className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#ded6ff]">
              TRUSTED BY LEADING BRANDS
            </p>
            <BrandTicker items={TRUSTED_BRANDS} paused={paused} />
            <div className="hidden justify-center border-s border-white/10 text-[#ded6ff] lg:flex">
              →
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-deep/60 p-5 backdrop-blur-xl md:grid-cols-4">
          {FEATURE_ITEMS.map(({ icon: Icon, titleKey, textKey }) => (
            <div key={titleKey} className="flex gap-4 border-white/10 md:border-e md:pe-4 last:border-0">
              <Icon className="mt-1 h-9 w-9 shrink-0 text-[#b96cff]" />
              <div>
                <h3 className="font-display text-base font-semibold text-white">{tr(titleKey, lang)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{tr(textKey, lang)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-5 right-4 z-40 w-[72px] overflow-hidden rounded-xl border border-white/10 bg-deep/86 text-center text-[10px] text-white shadow-2xl shadow-black/40 backdrop-blur-xl sm:bottom-6 sm:right-5 sm:w-[82px] sm:text-[11px]">
          <a href="#contact" className="flex flex-col items-center gap-2 border-b border-white/10 px-2 py-3 hover:bg-white/5">
            <Headphones className="h-5 w-5" />
            {tr("partners.rail.team", lang)}
          </a>
          <a href="#contact" className="flex flex-col items-center gap-2 border-b border-white/10 px-2 py-3 hover:bg-white/5">
            <Handshake className="h-5 w-5" />
            {tr("partners.rail.whatsapp", lang)}
          </a>
          <a href="#contact" className="flex flex-col items-center gap-2 px-2 py-3 hover:bg-white/5">
            <FileDown className="h-5 w-5" />
            {tr("partners.rail.brochure", lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
