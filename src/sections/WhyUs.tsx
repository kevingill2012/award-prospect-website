"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, FileCheck, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

const BADGE_ICONS = [Shield, FileCheck, Users];

function CountUp({ target, suffix, prefix, inView }: { target: number; suffix: string; prefix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000; const steps = 60; const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, inView]);
  return <span>{prefix}{count}{suffix}</span>;
}

export default function WhyUs() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const metrics = [
    { value: 70, suffix: "M+", prefix: "HKD " },
    { value: 50, suffix: "+", prefix: "" },
    { value: 100, suffix: "+", prefix: "" },
    { value: 100, suffix: "%", prefix: "" },
  ];

  return (
    <section id="why-us" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">{tr("why.title", lang)}</h2>
          <p className="section-subtitle mx-auto">{tr("why.subtitle", lang)}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 text-center card-glow"
            >
              <div className="font-display text-4xl font-bold text-coral">
                <CountUp target={metric.value} suffix={metric.suffix} prefix={metric.prefix} inView={inView} />
              </div>
              <p className="mt-3 text-sm leading-snug text-text-muted">
                {tr(`why.m${i + 1}.label`, lang)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => {
            const Icon = BADGE_ICONS[i] || Shield;
            return (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4 rounded-xl border border-white/6 bg-slate-soft/40 p-6"
              >
                <div className="mt-0.5 shrink-0 rounded-lg bg-coral/10 p-2">
                  <Icon className="h-5 w-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{tr(`why.b${n}.title`, lang)}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{tr(`why.b${n}.text`, lang)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
