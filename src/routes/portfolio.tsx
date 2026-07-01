import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/context";
import { Section } from "@/components/ui-custom/section";
import gymAppV1 from "@/assets/projects/gym-app-v1.webp";
import gymAppV2 from "@/assets/projects/gym-app-v2.webp";
import paraMaurice from "@/assets/projects/paramaurice.webp";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Webistry" },
      { name: "description", content: "Selected work from the Webistry studio." },
      { property: "og:title", content: "Portfolio — Webistry" },
      { property: "og:description", content: "Selected engagements." },
      { property: "og:url", content: "https://webistry.tn/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { t } = useI18n();
  const projectImages = [
  gymAppV1,
  gymAppV2,
  paraMaurice,
  ];
  return (
    <>
      <Section kicker={t.sections.portfolioKicker} title={t.portfolio.title} intro={t.portfolio.note}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full gold-border text-xs uppercase tracking-widest text-gold">
          Featured Projects
        </div>
      </Section>
      <Section bare className="!pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.items.map((p, i) => (
            <a
              key = {p.t}
              href = {p.href}
              target = "_blank"
              rel = "noopener noreferrer"
              className="block"
            >
            <article className="group surface-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border hover:border-[#c9a34e]/40 cursor-pointer hover:shadow-[0_0_40px_rgba(201,163,78,0.15)]">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-surface to-background">
                <div className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-20" style={{ background: `radial-gradient(circle at ${20 + i * 12}% ${30 + i * 10}%, var(--gold) 0%, transparent 60%)` }} />
                <img
                  src={projectImages[i]}
                  alt={p.t}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-gold">{p.tag}</div>
                <h3 className="mt-2 font-display text-xl font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-4 text-sm font-medium gold-text opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                  View Project →
                </div>
              </div>
            </article>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
