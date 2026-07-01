import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/context";
import { Section } from "@/components/ui-custom/section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Webistry" },
      { name: "description", content: "Join Webistry. Senior-only, remote-friendly, craft-obsessed." },
      { property: "og:title", content: "Careers — Webistry" },
      { property: "og:description", content: "Build the future of software with us." },
      { property: "og:url", content: "https://webistry.tn/careers" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/careers" }],
  }),
  component: Careers,
});

function Careers() {
  const { t } = useI18n();
  return (
    <>
      <Section kicker="Careers" title={t.careers.title} intro={t.careers.intro} />
      <Section kicker={t.careers.cultureTitle} title="How we work, together." className="!pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.careers.culture.map((c) => (
            <div key={c.t} className="surface-card p-7">
              <h3 className="font-display text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        kicker={t.careers.hiringKicker}
        title={t.careers.noPositionsTitle}
      >
        <div className="flex flex-col items-start gap-4">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-prose lg :max-w-none lg:text-base lg:leading-relaxed lg:max-w-prose lg:leading-relaxed lg:text-base lg:leading-relaxed lg:max-w-prose lg:leading-relaxed lg:text-base lg:leading-relaxed lg:max-w-prose lg:leading-relaxed lg:text-base lg:leading-relaxed lg:max-w-prose lg:leading-relaxed lg:text-base lg:leading-relaxed lg:max-w-prose lg:leading-relaxed lg:text-base lg:leading-relaxed lg:max-w-prose lg:leading-relaxed lg:text-base lg:leading-relaxed">
            {t.careers.noPositionsText}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {t.careers.contactCta}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
        </div>
      </Section>
    </>
  );
}
