import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/context";
import { Section } from "@/components/ui-custom/section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Webistry" },
      { name: "description", content: "How Webistry handles your data." },
      { property: "og:url", content: "https://webistry.tn/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  const { t } = useI18n();
  return (
    <Section title={t.legal.privacyTitle}>
      <div className="prose prose-invert max-w-3xl">
        <p className="text-muted-foreground leading-relaxed">{t.legal.privacyBody}</p>
        <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">{t.legal.updated}</p>
      </div>
    </Section>
  );
}
