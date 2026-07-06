"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_KEYS = [
  { href: "#about", key: "nav.about" },
  { href: "#capabilities", key: "nav.capabilities" },
  { href: "#why-us", key: "nav.why" },
  { href: "#timeline", key: "nav.journey" },
  { href: "#partners", key: "nav.partners" },
  { href: "#contact", key: "nav.contact" },
];

export default function Navbar() {
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY < 240) setActiveHref("#");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["#home", ...NAV_KEYS.map(({ href }) => href)]
      .map((href) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveHref(visible.target.id === "home" ? "#" : `#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.2, 0.45, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-deep/90 py-3 shadow-lg shadow-black/30 backdrop-blur-xl" : "bg-deep/80 py-5 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo-footer.png"
            alt={tr("company.name", lang)}
            className="h-12 w-auto sm:h-14"
          />
        </a>

        {/* Desktop links + language */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_KEYS.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              aria-current={activeHref === href ? "page" : undefined}
              className={`focus-tech rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors ${
                activeHref === href
                  ? "bg-coral/10 text-coral"
                  : "text-text-muted hover:text-text-primary"
              }`}
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
            aria-label={tr("nav.menuToggle", lang)}
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
                aria-current={activeHref === href ? "page" : undefined}
                className={`focus-tech rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                  activeHref === href
                    ? "bg-coral/10 text-coral"
                    : "text-text-muted hover:text-text-primary"
                }`}
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
