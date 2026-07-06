"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LANGUAGES, tr } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-white/20 hover:text-text-primary"
        aria-label={tr("language.switch", lang)}
      >
        <Globe size={14} />
        <span>{tr(`language.${current.code}`, lang)}</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute end-0 top-full z-50 mt-2 w-max min-w-52 overflow-hidden rounded-xl border border-white/10 bg-deep/95 backdrop-blur-xl shadow-2xl">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 whitespace-nowrap px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                  l.code === lang
                    ? "text-coral font-semibold"
                    : "text-text-muted"
                }`}
              >
                <span className="text-base">{tr(`language.${l.code}`, lang)}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
