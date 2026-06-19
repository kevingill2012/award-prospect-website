"use client";

import LegalLayout, { Section } from "@/components/LegalLayout";
import { tr } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function TermsPage() {
  const { lang } = useLanguage();

  return (
    <LegalLayout titleKey="terms.title" lastUpdatedKey="terms.lastUpdated">
      <p>{tr("terms.intro", lang)}</p>

      <Section titleKey="terms.service.title">
        {tr("terms.service.text", lang)}
      </Section>

      <Section titleKey="terms.ip.title">
        {tr("terms.ip.text", lang)}
      </Section>

      <Section titleKey="terms.liability.title">
        {tr("terms.liability.text", lang)}
      </Section>

      <Section titleKey="terms.governing.title">
        {tr("terms.governing.text", lang)}
      </Section>

      <Section titleKey="terms.contact.title">
        {tr("terms.contact.text", lang)}
      </Section>
    </LegalLayout>
  );
}
