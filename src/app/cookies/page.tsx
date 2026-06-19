"use client";

import LegalLayout, { Section } from "@/components/LegalLayout";
import { tr } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function CookiesPage() {
  const { lang } = useLanguage();

  return (
    <LegalLayout titleKey="cookies.title" lastUpdatedKey="cookies.lastUpdated">
      <p>{tr("cookies.intro", lang)}</p>

      <Section titleKey="cookies.what.title">
        {tr("cookies.what.text", lang)}
      </Section>

      <Section titleKey="cookies.types.title">
        {tr("cookies.types.text", lang)}
      </Section>

      <Section titleKey="cookies.control.title">
        {tr("cookies.control.text", lang)}
      </Section>
    </LegalLayout>
  );
}
