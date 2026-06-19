"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

export default function Timeline() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const nodes = [1, 2, 3, 4];

  return (
    <section id="timeline" className="section bg-slate-soft/30">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">{tr("time.title", lang)}</h2>
          <p className="section-subtitle mx-auto">{tr("time.subtitle", lang)}</p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-coral/40 via-violet-deep/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {nodes.map((n, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={n}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className={`relative mb-12 pl-12 md:mb-16 md:pl-0 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className={`absolute top-1.5 h-3 w-3 rounded-full border-2 border-coral bg-deep shadow-[0_0_8px_rgba(233,69,96,0.5)] md:top-2 ${
                    isLeft ? "left-[calc(0.5rem-5px)] md:left-auto md:right-[-6px]" : "left-[calc(0.5rem-5px)] md:left-[-6px]"
                  }`}
                />
                <span className="inline-block rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                  {tr(`time.${n}.year`, lang)}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{tr(`time.${n}.title`, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{tr(`time.${n}.text`, lang)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
