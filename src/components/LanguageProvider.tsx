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

// Map Cloudflare country codes to languages
const COUNTRY_LANG_MAP: Record<string, Lang> = {
  CN: "zh-CN",
  TW: "zh-TW",
  HK: "zh-TW",
  MO: "zh-TW",
  SA: "ar",
  AE: "ar",
  QA: "ar",
  OM: "ar",
  KW: "ar",
  BH: "ar",
  EG: "ar",
  JO: "ar",
  LB: "ar",
  IQ: "ar",
  SY: "ar",
  YE: "ar",
  PS: "ar",
  LY: "ar",
  TN: "ar",
  DZ: "ar",
  MA: "ar",
  MR: "ar",
  SD: "ar",
};

async function fetchCountryLang(): Promise<Lang | null> {
  try {
    const resp = await fetch("/cdn-cgi/trace");
    if (!resp.ok) return null;
    const text = await resp.text();
    const lines = text.split("\n");
    for (const line of lines) {
      if (line.startsWith("loc=")) {
        const country = line.slice(4).trim().toUpperCase();
        if (country in COUNTRY_LANG_MAP) {
          return COUNTRY_LANG_MAP[country];
        }
        return null; // country known but not in our map → fall through
      }
    }
  } catch {
    // CF trace not available (dev mode, non-CF proxy, etc.)
  }
  return null;
}

function getBrowserLang(): Lang {
  try {
    const bl = navigator.language;
    if (bl.startsWith("zh")) {
      return bl.includes("TW") || bl.includes("HK") || bl.includes("MO")
        ? "zh-TW"
        : "zh-CN";
    }
    if (bl.startsWith("ar")) return "ar";
  } catch {}
  return "en";
}

async function detectLang(): Promise<Lang> {
  // 1. User preference (stored)
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang;
    if (stored) return stored;
  } catch {}

  // 2. Country IP → language (Cloudflare trace)
  const countryLang = await fetchCountryLang();
  if (countryLang) return countryLang;

  // 3. Browser language fallback
  return getBrowserLang();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    detectLang().then((detected) => {
      setLangState(detected);
      setMounted(true);
    });
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    document.documentElement.dir = getDir(l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = getDir(lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir: getDir(lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
