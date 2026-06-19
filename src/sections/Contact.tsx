"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";
import { COMPANY } from "@/lib/constants";

export default function Contact() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `mailto:${COMPANY.email}?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message + "\n\n— " + form.name + " (" + form.email + ")")}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <section id="contact" className="section bg-slate-soft/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">{tr("contact.title", lang)}</h2>
          <p className="section-subtitle mx-auto">{tr("contact.subtitle", lang)}</p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="mt-0.5 shrink-0 rounded-xl bg-coral/10 p-3">
                <MapPin className="h-5 w-5 text-coral" />
              </div>
              <div>
                <h4 className="font-semibold">{tr("contact.addressLabel", lang)}</h4>
                <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-text-muted">{COMPANY.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-0.5 shrink-0 rounded-xl bg-coral/10 p-3">
                <Mail className="h-5 w-5 text-coral" />
              </div>
              <div>
                <h4 className="font-semibold">{tr("contact.emailLabel", lang)}</h4>
                <a href={`mailto:${COMPANY.email}`} className="mt-1.5 block text-sm text-coral hover:underline">
                  {COMPANY.email}
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <div className="flex aspect-[16/9] items-center justify-center bg-ocean/20 text-sm text-text-muted">
                Hong Kong · Kowloon Bay
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/8 bg-deep/60 p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">{tr("contact.nameLabel", lang)}</label>
                  <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-coral/50 focus:outline-none focus:ring-1 focus:ring-coral/30"
                    placeholder={tr("contact.namePlaceholder", lang)} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">{tr("contact.emailLabelForm", lang)}</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-coral/50 focus:outline-none focus:ring-1 focus:ring-coral/30"
                    placeholder={tr("contact.emailPlaceholder", lang)} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">{tr("contact.msgLabel", lang)}</label>
                  <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-coral/50 focus:outline-none focus:ring-1 focus:ring-coral/30"
                    placeholder={tr("contact.msgPlaceholder", lang)} />
                </div>
                <button type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-coral py-3.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(233,69,96,0.4)]">
                  {sent ? tr("contact.sent", lang) : tr("contact.send", lang)}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
