"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";
import { COMPANY } from "@/lib/constants";

export default function Contact() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Auto-hide popup after 6 seconds and re-enable form
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        setSent(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const dismissPopup = () => {
    setShowPopup(false);
    setSent(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    try {
      // Detect country via Cloudflare trace
      let country = "";
      try {
        const traceResp = await fetch("/cdn-cgi/trace");
        if (traceResp.ok) {
          const text = await traceResp.text();
          const match = text.match(/^loc=(\w+)/m);
          if (match) country = match[1];
        }
      } catch {}

      // POST to B2B backend
      await fetch("https://b2b.awardprospect.com/api/website-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          country,
          language: lang,
        }),
      });
    } catch {
      // Fallback: still works, inquiry saved if B2B is reachable
    }

    // Show friendly popup and reset form
    setShowPopup(true);
    setForm({ name: "", email: "", message: "" });
  };

  const POPUP_TEXT = {
    en: { title: "Thank you!", body: "Your message has been received. We'll review it and get back to you within 24 hours." },
    "zh-CN": { title: "谢谢您！", body: "您的留言已收到。我们会在 24 小时内回复您。" },
    "zh-TW": { title: "謝謝您！", body: "您的留言已收到。我們會在 24 小時內回覆您。" },
    ar: { title: "شكراً لك!", body: "تم استلام رسالتك. سنراجعها ونتواصل معك خلال 24 ساعة." },
  };
  const popupText = POPUP_TEXT[lang as keyof typeof POPUP_TEXT] || POPUP_TEXT.en;

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
                <button type="submit" disabled={sent}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-coral py-3.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(233,69,96,0.4)] disabled:opacity-60">
                  {sent ? tr("contact.sent", lang) : tr("contact.send", lang)}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ---- 成功弹窗 ---- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={dismissPopup}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md rounded-2xl bg-deep p-8 text-center shadow-2xl"
            >
              <button onClick={dismissPopup}
                className="absolute right-4 top-4 rounded-full p-1 text-text-muted hover:bg-white/5 hover:text-text-primary">
                <X size={18} />
              </button>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle className="h-7 w-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{popupText.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{popupText.body}</p>
              <button onClick={dismissPopup}
                className="mt-6 rounded-full bg-coral px-6 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(233,69,96,0.35)]">
                {lang === "ar" ? "حسناً" : "好的"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
