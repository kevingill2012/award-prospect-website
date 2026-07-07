"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import {
  BadgeCheck,
  FileCheck2,
  PackageCheck,
  Plane,
  SearchCheck,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

const NODE_ICONS = [SearchCheck, FileCheck2, PackageCheck, BadgeCheck, Plane];

const NODE_IMAGES = [
  "/images/stock/business/handshake-meeting-01.jpg",
  "/images/stock/office/office-desk-docs-11.jpg",
  "/images/stock/logistics/warehouse-expansive-12.jpg",
  "/images/stock/hk/hk-container-port-10.jpg",
  "/images/stock/world/global-connections-03.jpg",
];

export default function Traceability() {
  const { lang } = useLanguage();
  const headingRef = useRef(null);
  const corridorRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });
  const [activeNode, setActiveNode] = useState(0);
  const isZh = lang === "zh-CN" || lang === "zh-TW";

  const { scrollYProgress } = useScroll({
    target: corridorRef,
    offset: ["start 80%", "end 25%"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = Number((visible.target as HTMLElement).dataset.idx);
        if (Number.isFinite(idx)) setActiveNode(idx);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.35, 0.6, 0.9] },
    );

    nodeRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="traceability" className="section relative overflow-hidden">
      <div className="tech-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent" />
      <div className="relative mx-auto max-w-[92rem] px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-coral/20 bg-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
            {tr("trace.eyebrow", lang)}
          </span>
          <h2 className="section-heading mt-5">{tr("trace.title", lang)}</h2>
          <p className="section-subtitle mx-auto">{tr("trace.subtitle", lang)}</p>
        </motion.div>

        <div ref={corridorRef} className="mt-16 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] md:items-stretch lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)]">
          <div className="relative h-full">
            <div className="absolute start-5 top-5 bottom-5 w-px bg-white/10 md:start-0 md:end-0 md:left-0 md:right-0 md:top-7 md:bottom-auto md:h-px md:w-auto">
              <motion.div
                className="h-full origin-top bg-gradient-to-b from-coral via-violet-deep to-coral/40 md:h-px md:w-full md:origin-left md:bg-gradient-to-r"
                style={{ scaleY: scrollYProgress, scaleX: scrollYProgress }}
              />
            </div>

            <div className="relative grid h-full gap-4 md:grid-cols-5">
              {[0, 1, 2, 3, 4].map((idx) => {
                const Icon = NODE_ICONS[idx];
                const active = idx === activeNode;
                return (
                  <button
                    key={idx}
                    ref={(el) => {
                      nodeRefs.current[idx] = el;
                    }}
                    data-idx={idx}
                    type="button"
                    aria-pressed={active}
                    aria-controls="traceability-detail"
                    onClick={() => setActiveNode(idx)}
                    className={`focus-tech group relative flex h-full min-h-[190px] flex-col rounded-2xl border p-3 text-start transition-all md:min-h-[440px] xl:min-h-[430px] ${
                      active
                        ? "border-coral/45 bg-coral/10 shadow-[0_0_32px_rgba(233,69,96,0.16)]"
                        : "border-white/8 bg-white/[0.035] hover:border-white/18 hover:bg-white/[0.055]"
                    }`}
                  >
                    <span
                      className={`relative z-10 mb-4 flex h-9 w-9 items-center justify-center rounded-xl border ${
                        active
                          ? "border-coral/40 bg-coral/15 text-coral"
                          : "border-white/10 bg-deep/70 text-text-muted"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="relative z-10 block text-xs font-semibold uppercase tracking-[0.2em] text-coral/80">
                      {tr(`trace.node.${idx + 1}.step`, lang)}
                    </span>
                    <span className={`relative z-10 mt-2 block font-display text-[15px] font-semibold xl:text-lg ${isZh ? "whitespace-nowrap" : ""}`}>
                      {tr(`trace.node.${idx + 1}.title`, lang)}
                    </span>
                    <span className="relative z-10 mt-3 block text-sm leading-relaxed text-text-muted">
                      {tr(`trace.node.${idx + 1}.short`, lang)}
                    </span>
                    <span
                      className={`absolute end-4 top-4 h-2.5 w-2.5 rounded-full ${
                        active ? "bg-coral shadow-[0_0_18px_rgba(233,69,96,0.75)]" : "bg-white/20"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            id="traceability-detail"
            key={activeNode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="tech-panel flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={NODE_IMAGES[activeNode]}
                alt=""
                className="h-full w-full object-cover opacity-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
              <div className="absolute bottom-5 start-5 end-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                  {tr(`trace.node.${activeNode + 1}.step`, lang)}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  {tr(`trace.node.${activeNode + 1}.title`, lang)}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-relaxed text-text-muted">
                {tr(`trace.node.${activeNode + 1}.detail`, lang)}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral/80">
                      {tr(`trace.node.${activeNode + 1}.metric.${n}.label`, lang)}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold">
                      {tr(`trace.node.${activeNode + 1}.metric.${n}.value`, lang)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 overflow-hidden rounded-full border border-white/8 bg-white/[0.035]">
                <div className="animate-data-shimmer h-1 bg-gradient-to-r from-transparent via-coral to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/8 bg-deep/80">
          <img
            src="/images/stock/logistics/container-ship-dock-08.jpg"
            alt=""
            className="h-[360px] w-full object-cover opacity-70 sm:h-[440px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/45 to-deep/15" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-deep to-transparent" />
          <div className="absolute bottom-8 start-8 end-8 grid gap-5 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coral">
                {tr("trace.gateway.eyebrow", lang)}
              </p>
              <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                {tr("trace.gateway.title", lang)}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
                {tr("trace.gateway.text", lang)}
              </p>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-deep/70 p-5 backdrop-blur">
              {[
                ["100%", "trace.gateway.metric.1"],
                ["30+", "trace.gateway.metric.2"],
                ["24/7", "trace.gateway.metric.3"],
              ].map(([value, labelKey]) => (
                <div key={labelKey} className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-text-muted">{tr(labelKey, lang)}</span>
                  <span className="font-display text-2xl font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
