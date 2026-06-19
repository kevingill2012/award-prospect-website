"use client";

import LegalLayout, { Section } from "@/components/LegalLayout";
import { tr } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { COMPANY } from "@/lib/constants";

export default function PrivacyPage() {
  const { lang } = useLanguage();

  return (
    <LegalLayout titleKey="privacy.title" lastUpdatedKey="privacy.lastUpdated">
      <p>{tr("privacy.intro", lang)}</p>

      <Section titleKey="privacy.collect.title">
        {tr("privacy.collect.text", lang)}
      </Section>

      <Section titleKey="privacy.use.title">
        {tr("privacy.use.text", lang)}
      </Section>

      <Section titleKey="privacy.share.title">
        {tr("privacy.share.text", lang)}
      </Section>

      <Section titleKey="privacy.cookies.title">
        {tr("privacy.cookies.text", lang)}{" "}
        <a href="/cookies" className="text-coral hover:underline">
          Cookie Policy
        </a>
        .
      </Section>

      <Section titleKey="privacy.rights.title">
        {tr("privacy.rights.text", lang)}
      </Section>

      <Section titleKey="privacy.contact.title">
        <p className="whitespace-pre-line">
          Award Prospect Limited<br />
          {COMPANY.address}<br />
          <br />
          Email:{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-coral hover:underline"
          >
            {COMPANY.email}
          </a>
        </p>
      </Section>
    </LegalLayout>
  );
}
