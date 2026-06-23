"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle, X } from "lucide-react";
import { useQRCode } from "next-qrcode";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";
import { COMPANY } from "@/lib/constants";

const WHATSAPP_NUMBER = "85244465035";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Contact() {
  const { lang } = useLanguage();
  const { Canvas } = useQRCode();
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

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex h-full flex-col space-y-8"
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
            <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] p-5">
              <h4 className="mb-2 text-center text-sm font-semibold">{tr("contact.whatsapp.title", lang)}</h4>
              <div className="mx-auto flex w-[100px] items-center justify-center rounded-lg bg-white p-1.5 shadow-md [&>canvas]:!w-full [&>canvas]:!h-auto">
                <Canvas
                  text={WHATSAPP_URL}
                  options={{
                    width: 200,
                    margin: 1,
                    color: { dark: "#1a1a2e", light: "#ffffff" },
                  }}
                />
              </div>
              <p className="mt-2 text-center text-xs leading-relaxed text-text-muted">
                {tr("contact.whatsapp.hint", lang)}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {tr("contact.whatsapp.button", lang)}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <form onSubmit={handleSubmit} className="flex h-full flex-col rounded-2xl border border-white/8 bg-deep/60 p-8">
              <div className="flex flex-1 flex-col space-y-5">
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
                <div className="flex flex-1 flex-col">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">{tr("contact.msgLabel", lang)}</label>
                  <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full flex-1 resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-coral/50 focus:outline-none focus:ring-1 focus:ring-coral/30"
                    placeholder={tr("contact.msgPlaceholder", lang)} />
                </div>
              </div>
              <button type="submit" disabled={sent}
                className="mt-5 flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-coral py-3.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(233,69,96,0.4)] disabled:opacity-60">
                {sent ? tr("contact.sent", lang) : tr("contact.send", lang)}
                <Send size={16} />
              </button>
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
                className="absolute end-4 top-4 rounded-full p-1 text-text-muted hover:bg-white/5 hover:text-text-primary">
                <X size={18} />
              </button>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle className="h-7 w-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{popupText.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{popupText.body}</p>
              <button onClick={dismissPopup}
                className="mt-6 rounded-full bg-coral px-6 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(233,69,96,0.35)]">
                {lang === "en" ? "OK" : lang === "ar" ? "حسناً" : lang === "zh-TW" ? "好的" : "好的"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
