"use client";

import { type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { tr } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/sections/Footer";

export default function LegalLayout({
  titleKey,
  lastUpdatedKey,
  children,
}: {
  titleKey: string;
  lastUpdatedKey: string;
  children: ReactNode;
}) {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-deep">
      {/* Top bar */}
      <div className="glass sticky top-0 z-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={16} />
            <span className="font-display font-bold">
              Award<span className="text-coral">Prospect</span>
            </span>
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          {tr(titleKey, lang)}
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          {tr(lastUpdatedKey, lang)}
        </p>
        <div className="mt-10 space-y-10 text-sm leading-7 text-text-muted">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export function Section({
  titleKey,
  children,
}: {
  titleKey: string;
  children: ReactNode;
}) {
  const { lang } = useLanguage();
  return (
    <section>
      <h2 className="mb-3 font-display text-lg font-semibold text-text-primary">
        {tr(titleKey, lang)}
      </h2>
      <div className="whitespace-pre-line">{children}</div>
    </section>
  );
}

export function Text({ textKey }: { textKey: string }) {
  const { lang } = useLanguage();
  return <>{tr(textKey, lang)}</>;
}
