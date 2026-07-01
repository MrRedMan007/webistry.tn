import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

export function Hero() {
  const { t } = useI18n();
  const techs = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Figma"];
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background))] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <svg className="absolute inset-0 size-full opacity-[0.04]" aria-hidden>
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-1/4 -start-32 size-96 rounded-full bg-gold/10 blur-3xl float-slow" />
        <div className="absolute bottom-0 -end-32 size-96 rounded-full bg-gold/5 blur-3xl float-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl pt-24 md:pt-36 pb-24 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full gold-border text-xs uppercase tracking-[0.18em] text-muted-foreground fade-up">
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          {t.hero.badge}
        </div>

        <h1 className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight fade-up" style={{ animationDelay: "0.1s" }}>
          {t.hero.title1}
          <br />
          <span className="gold-text">{t.hero.title2}</span>
        </h1>

        <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed fade-up" style={{ animationDelay: "0.2s" }}>
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all hover:gap-3"
          >
            {t.hero.cta1}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </Link>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-background/50 backdrop-blur text-sm font-medium hover:bg-secondary transition-all"
          >
            {t.hero.cta2}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-20 fade-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">{t.hero.tech}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground/80 font-medium">
            {techs.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
