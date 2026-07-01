import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/context";
import { Section } from "@/components/ui-custom/section";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Webistry" },
      { name: "description", content: "Webistry is a premium software studio. Our mission, vision and values." },
      { property: "og:title", content: "About — Webistry" },
      { property: "og:description", content: "Our mission, vision and values." },
      { property: "og:url", content: "https://webistry.tn/about" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  return (
    <>
      <Section kicker={t.sections.aboutKicker} title={t.about.title} intro={t.about.intro} />
      <Section bare className="!pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="surface-card p-10">
            <div className="text-xs uppercase tracking-widest text-gold">{t.about.missionTitle}</div>
            <p className="mt-4 font-display text-2xl leading-snug">{t.about.mission}</p>
          </div>
          <div className="surface-card p-10">
            <div className="text-xs uppercase tracking-widest text-gold">{t.about.visionTitle}</div>
            <p className="mt-4 font-display text-2xl leading-snug">{t.about.vision}</p>
          </div>
        </div>
      </Section>
      <Section kicker={t.about.valuesTitle} title="The principles we live by.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.values.map((v) => (
            <div key={v.t} className="surface-card p-7">
              <div className="size-10 rounded-md bg-gold/10 inline-flex items-center justify-center text-gold"><Check className="size-5" /></div>
              <h3 className="mt-5 font-display text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
