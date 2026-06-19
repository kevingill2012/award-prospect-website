"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/i18n";
import { getDir } from "@/lib/i18n";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  dir: "ltr",
});

const STORAGE_KEY = "award-prospect-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang;
    if (stored) return stored;
    // Browser language detection
    const browserLang = navigator.language;
    if (browserLang.startsWith("zh")) {
      return browserLang.includes("TW") || browserLang.includes("HK")
        ? "zh-TW"
        : "zh-CN";
    }
    if (browserLang.startsWith("ar")) return "ar";
  } catch {}
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(getInitialLang());
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    // Update html dir attribute for RTL
    document.documentElement.dir = getDir(l);
    document.documentElement.lang = l;
  };

  // Sync dir on mount and lang change
  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = getDir(lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, dir: getDir(lang) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
