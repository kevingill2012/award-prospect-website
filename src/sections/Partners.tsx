"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

const BRAND_ROW1 = [
  "A2", "Swisse", "Blackmores", "Bio Islands", "Maxigenes",
  "Aptamil", "Bellamy's", "QV", "Nivea", "Vaseline",
];
const BRAND_ROW2 = [
  "Estée Lauder", "La Mer", "Lancôme", "SK-II", "Clinique",
  "Dior", "Shiseido", "Bioderma", "Avène", "Vaseline",
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden py-4">
      <div className={`flex shrink-0 gap-12 px-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items, ...items].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-semibold text-text-muted/25 transition-colors hover:text-coral/60 sm:text-3xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" className="section overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">{tr("partners.title", lang)}</h2>
          <p className="section-subtitle mx-auto">{tr("partners.subtitle", lang)}</p>
        </motion.div>
      </div>
      <div className="mt-16">
        <MarqueeRow items={BRAND_ROW1} />
        <MarqueeRow items={BRAND_ROW2} reverse />
      </div>
    </section>
  );
}
