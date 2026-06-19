"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_KEYS = [
  { href: "#about", key: "nav.about" },
  { href: "#capabilities", key: "nav.capabilities" },
  { href: "#timeline", key: "nav.timeline" },
  { href: "#partners", key: "nav.partners" },
  { href: "#contact", key: "nav.contact" },
];

export default function Navbar() {
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-deep py-3 shadow-lg shadow-black/30" : "bg-deep py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo-nav.png" alt="Award Prospect"
            className="h-10 w-auto mix-blend-screen brightness-125" />
        </a>

        {/* Desktop links + language */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_KEYS.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
            >
              {tr(key, lang)}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(233,69,96,0.4)]"
          >
            {tr("nav.cta", lang)}
          </a>
        </div>

        {/* Mobile toggle + language */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            className="text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-deep/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_KEYS.map(({ href, key }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-text-muted transition-colors hover:text-text-primary"
              >
                {tr(key, lang)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-coral py-3 text-center text-sm font-semibold text-white"
            >
              {tr("nav.cta", lang)}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
