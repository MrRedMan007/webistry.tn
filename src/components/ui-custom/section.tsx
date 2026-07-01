import type { ReactNode } from "react";

export function Section({
  id,
  kicker,
  title,
  intro,
  children,
  className = "",
  bare = false,
}: {
  id?: string;
  kicker?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  bare?: boolean;
}) {
  return (
    <section id={id} className={`container-px mx-auto max-w-7xl py-24 md:py-32 ${className}`}>
      {(kicker || title || intro) && !bare && (
        <div className="max-w-3xl mb-14 md:mb-20">
          {kicker && (
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{kicker}</span>
            </div>
          )}
          {title && <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">{title}</h2>}
          {intro && <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
