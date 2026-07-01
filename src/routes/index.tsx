import gymAppV1 from "@/assets/projects/gym-app-v1.webp";
import gymAppV2 from "@/assets/projects/gym-app-v2.webp";
import paraMaurice from "@/assets/projects/paramaurice.webp";
const projectImages = [gymAppV1, gymAppV2, paraMaurice];
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe2, Layers, Smartphone, Monitor, Palette, Sparkles, Shield, Wrench, Code2,
  ArrowRight, ChevronDown, Check,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n/context";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui-custom/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webistry — We transform ideas into digital products" },
      { name: "description", content: "Premium Tunisian software studio crafting web, mobile, desktop and enterprise software for ambitious teams worldwide." },
      { property: "og:title", content: "Webistry — Premium software studio" },
      { property: "og:description", content: "We transform ideas into digital products." },
      { property: "og:url", content: "https://webistry.tn/" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/" }],
  }),
  component: Home,
});

const SERVICE_ICONS = [Globe2, Layers, Smartphone, Monitor, Palette, Sparkles, Shield, Wrench, Code2];

function Home() {
  const { t } = useI18n();
  return (
    <>
      <Hero />

      <Section kicker={t.sections.aboutKicker} title={<>{t.sections.aboutTitle}</>} intro={t.sections.aboutBody}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {[
            { n: "100%", l: "Senior-led" },
            { n: "9", l: "Service lines" },
            { n: "24h", l: "Response time" },
            { n: "∞", l: "Attention to detail" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-8">
              <div className="font-display text-4xl md:text-5xl gold-text font-semibold">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker={t.sections.servicesKicker} title={t.sections.servicesTitle}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {t.services.list.map((s, i) => {
            const Icon = SERVICE_ICONS[i] ?? Code2;
            return (
              <div key={s.t} className="group relative bg-background p-8 transition-colors hover:bg-surface">
                <Icon className="size-7 text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
            {t.nav.services}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
        </div>
      </Section>

      <Section kicker={t.sections.processKicker} title={t.sections.processTitle}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.map((p, i) => (
            <div key={p.t} className="surface-card p-7">
              <div className="text-xs font-mono text-gold">0{i + 1}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker={t.sections.whyKicker} title={t.sections.whyTitle}>
        <div className="grid md:grid-cols-2 gap-6">
          {t.why.map((w) => (
            <div key={w.t} className="surface-card p-8 flex gap-5">
              <div className="shrink-0 size-10 rounded-md bg-gold/10 inline-flex items-center justify-center text-gold">
                <Check className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker={t.sections.portfolioKicker} title={t.sections.portfolioTitle} intro={t.sections.portfolioNote}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.items.slice(0, 6).map((p, i) => (
            <a
              key={p.t}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <article className="group surface-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border hover:border-[#c9a34e]/40 cursor-pointer hover:shadow-[0_0_40px_rgba(201,163,78,0.15)]">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-surface to-background">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{ background: `radial-gradient(circle at ${30 + i * 10}% ${40 + i * 8}%, var(--gold) 0%, transparent 60%)` }} />
                <img
                  src={projectImages[i]}
                  alt={p.t}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-gold">
                  {p.tag}
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold">
                  {p.t}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {p.d}
                </p>

                <div className="mt-4 text-sm font-medium gold-text opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                  View Project →
                </div>
              </div>
            </article>
            </a>
          ))}
        </div>
      </Section>

      <Section kicker={t.sections.techKicker} title={t.sections.techTitle}>
        <div className="flex flex-wrap gap-3">
          {["React","Next.js","TypeScript","Node.js","Python","Go","PostgreSQL","MongoDB","AWS","GCP","Docker","Kubernetes","React Native","Swift","Kotlin","Tailwind","Figma","Stripe"].map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full hairline text-sm text-muted-foreground hover:text-foreground hover:border-gold/50 transition-colors">{tech}</span>
          ))}
        </div>
      </Section>

      <Section kicker={t.sections.testimonialsKicker} title={t.sections.testimonialsTitle}>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.map((tt, i) => (
            <figure key={i} className="surface-card p-8">
              <div className="text-gold text-2xl font-display leading-none">"</div>
              <blockquote className="mt-3 text-base leading-relaxed">{tt.q}</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{tt.a}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section kicker={t.sections.faqKicker} title={t.sections.faqTitle}>
        <FAQ items={t.faq} />
      </Section>

      <Section kicker={t.sections.newsletterKicker} title={t.sections.newsletterTitle} intro={t.sections.newsletterSub}>
        <Newsletter />
      </Section>

      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="relative overflow-hidden surface-card p-12 md:p-20 text-center">
          <div aria-hidden className="absolute inset-0 -z-10 opacity-50" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--gold) 15%, transparent), transparent 70%)" }} />
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">{t.sections.ctaTitle}</h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground">{t.sections.ctaBody}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
              {t.nav.startProject}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQ({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-6 text-start"
            >
              <span className="font-display text-lg md:text-xl">{it.q}</span>
              <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-muted-foreground max-w-3xl leading-relaxed">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Newsletter() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) setDone(true); }}
      className="flex flex-col sm:flex-row gap-3 max-w-xl"
    >
      <label className="sr-only" htmlFor="newsletter-email">Email</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.sections.newsletterPlaceholder}
        className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <button type="submit" className="px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
        {done ? "✓" : t.sections.newsletterCta}
      </button>
    </form>
  );
}
