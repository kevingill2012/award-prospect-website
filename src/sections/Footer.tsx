"use client";

import { COMPANY } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";
import { MapPin, Mail } from "lucide-react";

// Inline brand SVGs for social media
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.765.266 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.266-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.266-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: IconLinkedIn, href: "https://linkedin.com/company/awardprospect", label: "LinkedIn" },
  { icon: IconX, href: "https://x.com/awardprospect", label: "X" },
  { icon: IconFacebook, href: "https://facebook.com/awardprospect", label: "Facebook" },
  { icon: IconInstagram, href: "https://instagram.com/awardprospect", label: "Instagram" },
];

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-white/6 bg-deep">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Company */}
          <div className="space-y-4">
            <img
              src="/logo-nav.png"
              alt="Award Prospect"
              className="h-14 w-auto"
            />
            <p className="text-sm leading-relaxed text-text-muted">
              {tr("footer.tagline", lang)}
            </p>
            <div className="space-y-2 text-sm text-text-muted">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-coral/60" />
                <span className="text-xs leading-relaxed">{COMPANY.address}</span>
              </div>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-coral hover:underline"
              >
                <Mail size={15} className="shrink-0" />
                <span className="text-xs">{COMPANY.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wide text-text-primary">
              {tr("footer.quickLinks", lang)}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#about", key: "nav.about" },
                { href: "#capabilities", key: "nav.capabilities" },
                { href: "#timeline", key: "nav.timeline" },
                { href: "#partners", key: "nav.partners" },
                { href: "#contact", key: "nav.contact" },
              ].map(({ href, key }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {tr(key, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Legal */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wide text-text-primary">
              {tr("footer.legal", lang)}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", key: "footer.privacy" },
                { href: "/terms", key: "footer.terms" },
                { href: "/cookies", key: "footer.cookies" },
              ].map(({ href, key }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {tr(key, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Social */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wide text-text-primary">
              {tr("footer.contactUs", lang)}
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-text-muted">
              {tr("contact.subtitle", lang)}
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(233,69,96,0.4)]"
            >
              {tr("nav.cta", lang)}
            </a>

            {/* Social icons */}
            <h4 className="mb-3 mt-8 font-display text-sm font-semibold tracking-wide text-text-primary">
              {tr("footer.followUs", lang)}
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-text-muted transition-all hover:border-coral/30 hover:bg-coral/10 hover:text-coral"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-center md:flex-row md:justify-between">
          <p className="text-xs text-text-muted/50">
            {tr("footer.copyright", lang)}
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-text-muted/50 transition-colors hover:text-text-muted">
              {tr("footer.privacy", lang)}
            </a>
            <a href="/terms" className="text-xs text-text-muted/50 transition-colors hover:text-text-muted">
              {tr("footer.terms", lang)}
            </a>
            <a href="/cookies" className="text-xs text-text-muted/50 transition-colors hover:text-text-muted">
              {tr("footer.cookies", lang)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
