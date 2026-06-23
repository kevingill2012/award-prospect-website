"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Ship, BarChart3 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

const ICONS = [ShoppingBag, Ship, BarChart3];

const CARD_IMAGES = [
  "/images/stock/business/team-meeting-office-04.jpg",
  "/images/stock/logistics/shipping-yard-aerial-10.jpg",
  "/images/stock/world/global-trade-routes-05.jpg",
];

export default function Capabilities() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  function getPoints(cardIdx: number): string[] {
    const result: string[] = [];
    for (let p = 1; p <= 4; p++) {
      const key = `cap.${cardIdx}.p${p}`;
      const val = tr(key, lang);
      if (val !== key) result.push(val);
    }
    return result;
  }

  return (
    <section id="capabilities" className="section bg-slate-soft/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">{tr("cap.title", lang)}</h2>
          <p className="section-subtitle mx-auto">{tr("cap.subtitle", lang)}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((cardIdx, idx) => {
            const Icon = ICONS[cardIdx - 1];
            const points = getPoints(cardIdx);
            return (
              <motion.div
                key={cardIdx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-deep/60 card-glow"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-coral via-violet-deep to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                {/* Card header image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={CARD_IMAGES[idx]}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-5 inline-flex rounded-xl bg-coral/10 p-3">
                    <Icon className="h-6 w-6 text-coral" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {tr(`cap.${cardIdx}.title`, lang)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {tr(`cap.${cardIdx}.tagline`, lang)}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {points.map((point) => (
                      <li
                        key={point.slice(0, 20)}
                        className="flex gap-2.5 text-sm text-text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-coral/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-white/6 pt-4 text-xs italic text-text-muted/70">
                    {tr(`cap.${cardIdx}.footer`, lang)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
