import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/context";
import { Section } from "@/components/ui-custom/section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Webistry" },
      { name: "description", content: "Terms governing the use of webistry.tn." },
      { property: "og:url", content: "https://webistry.tn/terms" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/terms" }],
  }),
  component: Terms,
});

function Terms() {
  const { t } = useI18n();
  return (
    <Section title={t.legal.termsTitle}>
      <div className="prose prose-invert max-w-3xl">
        <p className="text-muted-foreground leading-relaxed">{t.legal.termsBody}</p>
        <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">{t.legal.updated}</p>
      </div>
    </Section>
  );
}
