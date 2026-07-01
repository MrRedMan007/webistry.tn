import logoSrc from "@/assets/logo.png";

export function Logo({ size = 32, withWordmark = true, className = "" }: { size?: number; withWordmark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Webistry">
      <img src={logoSrc} width={size} height={size} alt="" className="block" style={{ width: size, height: size }} />
      {withWordmark && (
        <span className="font-display text-lg font-semibold tracking-wide">
          <span className="gold-text">Webistry</span>
          <span className="text-muted-foreground text-xs align-super ms-0.5">.tn</span>
        </span>
      )}
    </span>
  );
}
