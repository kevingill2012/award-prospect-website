"use client";

import { useRef, useState } from "react";
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
  const [activeCard, setActiveCard] = useState(1);

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
      <div className="mx-auto max-w-[92rem] px-6">
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

        <div className="mt-16 grid auto-rows-fr items-stretch gap-6 md:grid-cols-3">
          {[1, 2, 3].map((cardIdx, idx) => {
            const Icon = ICONS[cardIdx - 1];
            const points = getPoints(cardIdx);
            const active = activeCard === cardIdx;
            return (
              <motion.button
                key={cardIdx}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCard(cardIdx)}
                onFocus={() => setActiveCard(cardIdx)}
                onMouseEnter={() => setActiveCard(cardIdx)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className={`focus-tech group relative flex h-full flex-col overflow-hidden rounded-2xl border text-start card-glow ${
                  active
                    ? "border-coral/40 bg-deep/80 shadow-[0_0_34px_rgba(233,69,96,0.14)]"
                    : "border-white/8 bg-deep/60"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-coral via-violet-deep to-transparent transition-opacity ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                {/* Card header image */}
                <div className="relative h-40 shrink-0 overflow-hidden">
                  <img
                    src={CARD_IMAGES[idx]}
                    alt=""
                    className={`h-full w-full object-cover transition-transform duration-500 ${
                      active ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
                  <div className="absolute bottom-4 start-4 rounded-full border border-coral/25 bg-deep/70 px-3 py-1 text-xs font-semibold text-coral backdrop-blur">
                    {tr(`cap.${cardIdx}.signal`, lang)}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div
                    className={`mb-5 inline-flex rounded-xl p-3 transition-colors ${
                      active ? "bg-coral/15" : "bg-coral/10"
                    }`}
                  >
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
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          active ? "bg-coral shadow-[0_0_10px_rgba(233,69,96,0.6)]" : "bg-coral/70"
                        }`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto min-h-[76px] border-t border-white/6 pt-4 text-xs italic leading-relaxed text-text-muted/70">
                    {tr(`cap.${cardIdx}.footer`, lang)}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
