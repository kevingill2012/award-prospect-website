"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LANGUAGES, type Lang } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-white/20 hover:text-text-primary"
        aria-label="Switch language"
      >
        <Globe size={14} />
        <span>{current.native}</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-deep/95 backdrop-blur-xl shadow-2xl">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                  l.code === lang
                    ? "text-coral font-semibold"
                    : "text-text-muted"
                }`}
              >
                <span className="text-base">{l.native}</span>
                <span className="text-xs text-text-muted/50">
                  {l.label}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
