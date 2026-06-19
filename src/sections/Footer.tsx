"use client";

import { COMPANY } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-white/6 bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <img
              src="/logo-footer.png"
              alt="Award Prospect"
              className="mx-auto h-20 w-auto"
            />
            <p className="mt-1 text-sm text-text-muted">{COMPANY.nameZh}</p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-text-muted">
            {tr("footer.tagline", lang)}<br />
            {tr("footer.subhead", lang)}
          </p>
          <p className="text-xs text-text-muted/60">{COMPANY.address}</p>
          <a href={`mailto:${COMPANY.email}`} className="text-xs text-coral hover:underline">{COMPANY.email}</a>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-xs text-text-muted/50">{tr("footer.copyright", lang)}</p>
        </div>
      </div>
    </footer>
  );
}
