"use client";

import Link from "next/link";
import LegalLayout, { Section } from "@/components/LegalLayout";
import { tr } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

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
        <Link href="/cookies" className="text-coral hover:underline">
          {tr("footer.cookies", lang)}
        </Link>
        .
      </Section>

      <Section titleKey="privacy.rights.title">
        {tr("privacy.rights.text", lang)}
      </Section>

      <Section titleKey="privacy.contact.title">
        <p className="whitespace-pre-line">
          {tr("company.name", lang)}<br />
          {tr("company.address", lang)}<br />
          <br />
          {tr("contact.emailLabel", lang)}:{" "}
          <a
            href="mailto:info@awardprospect.com"
            className="text-coral hover:underline"
          >
            info@awardprospect.com
          </a>
        </p>
      </Section>
    </LegalLayout>
  );
}
