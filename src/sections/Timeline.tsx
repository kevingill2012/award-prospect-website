"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

export default function Timeline() {
  const { lang } = useLanguage();
  const headingRef = useRef(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 15%"],
  });

  const nodes = [1, 2, 3, 4];

  return (
    <section id="timeline" className="section bg-slate-soft/30">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">{tr("time.title", lang)}</h2>
          <p className="section-subtitle mx-auto">{tr("time.subtitle", lang)}</p>
        </motion.div>

        <div ref={timelineRef} className="relative mt-20">
          {/* Scroll-driven vertical line */}
          <div className="absolute start-4 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px">
            {/* Faded background track — always visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-coral/15 via-violet-deep/10 to-transparent" />
            {/* Animated drawing line — reveals as you scroll */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-coral via-violet-deep to-coral/40 origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          {nodes.map((n, i) => {
            const isLeft = i % 2 === 0;
            const yearText = tr(`time.${n}.year`, lang);

            return (
              <motion.div
                key={n}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className={`relative mb-12 ps-12 md:mb-16 md:ps-0 md:w-1/2 ${
                  isLeft ? "md:pe-12 md:text-end" : "md:ms-auto md:ps-12"
                }`}
              >
                {/* Year watermark — giant translucent year behind content */}
                <span
                  className={`absolute top-0 select-none font-display font-bold leading-none text-white/[0.025] pointer-events-none text-[100px] md:text-[130px] ${
                    isLeft
                      ? "start-0 md:start-auto md:end-0"
                      : "start-0 md:start-0"
                  }`}
                  style={{ transform: "translateY(-22%)" }}
                >
                  {yearText}
                </span>

                {/* Dot with ripple pulse */}
                <div
                  className={`absolute top-1.5 md:top-2 ${
                    isLeft
                      ? "start-[calc(0.5rem-5.5px)] md:start-auto md:end-[-6px]"
                      : "start-[calc(0.5rem-5.5px)] md:start-[-6px]"
                  }`}
                >
                  {/* Expanding ripple ring */}
                  <motion.div
                    className="absolute -inset-2 rounded-full border border-coral/40"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{
                      opacity: [0, 0.7, 0],
                      scale: [0.5, 1.6, 2],
                    }}
                    transition={{ duration: 1.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  {/* Core dot */}
                  <div className="relative z-10 h-3 w-3 rounded-full border-2 border-coral bg-deep shadow-[0_0_8px_rgba(233,69,96,0.5)]" />
                </div>

                {/* Content */}
                <span className="relative z-10 inline-block rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                  {yearText}
                </span>
                <h3 className="relative z-10 mt-2 font-display text-xl font-semibold">
                  {tr(`time.${n}.title`, lang)}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-text-muted">
                  {tr(`time.${n}.text`, lang)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
