"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

const STAT_KEYS = [
  { valueKey: "about.stat1.value", labelKey: "about.stat1.label", subKey: "about.stat1.sub" },
  { valueKey: "about.stat2.value", labelKey: "about.stat2.label", subKey: "about.stat2.sub" },
  { valueKey: "about.stat3.value", labelKey: "about.stat3.label", subKey: "about.stat3.sub" },
];

function StatCard({ valueKey, labelKey, subKey, delay }: { valueKey: string; labelKey: string; subKey: string; delay: number }) {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center backdrop-blur-sm card-glow"
    >
      <div className="font-display text-3xl font-bold text-coral sm:text-4xl">
        {tr(valueKey, lang)}
      </div>
      <div className="mt-1 text-sm font-semibold tracking-wide text-text-primary">
        {tr(labelKey, lang)}
      </div>
      <div className="mt-2 text-xs leading-relaxed text-text-muted">
        {tr(subKey, lang)}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">
            {tr("about.title", lang).split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {STAT_KEYS.map((stat, i) => (
            <StatCard key={stat.valueKey} {...stat} delay={i * 0.15} />
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="whitespace-pre-line text-lg leading-relaxed text-text-muted">
              {tr("about.story", lang)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img src="/logo-nav.png?v=8" alt="Award Prospect"
              className="h-auto w-full max-w-[500px] object-contain opacity-90" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
