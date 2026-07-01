import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/context";
import { Section } from "@/components/ui-custom/section";
import {
  Globe2, Layers, Smartphone, Monitor, Palette, Sparkles, Shield, Wrench, Code2, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Webistry" },
      { name: "description", content: "Web, mobile, desktop, UI/UX, branding, cybersecurity, maintenance and custom software." },
      { property: "og:title", content: "Services — Webistry" },
      { property: "og:description", content: "End-to-end software, engineered to a higher standard." },
      { property: "og:url", content: "https://webistry.tn/services" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/services" }],
  }),
  component: Services,
});

const ICONS = [Globe2, Layers, Smartphone, Monitor, Palette, Sparkles, Shield, Wrench, Code2];

function Services() {
  const { t } = useI18n();
  return (
    <>
      <Section kicker={t.sections.servicesKicker} title={t.sections.servicesTitle} intro="A single partner for every stage of your product — from the first sketch to long-term operation." />
      <Section bare className="!pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.list.map((s, i) => {
            const Icon = ICONS[i] ?? Code2;
            return (
              <article key={s.t} className="surface-card p-8 flex flex-col h-full transition-all hover:border-gold/40">
                <Icon className="size-8 text-gold" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all">
                  {t.nav.startProject}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
