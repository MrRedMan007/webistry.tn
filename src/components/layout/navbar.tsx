import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n } from "@/i18n/context";
import { useTheme } from "@/components/theme-provider";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/dictionaries";
import { Logo } from "@/components/logo";

export function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouterState();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [router.location.pathname]);

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/careers", label: t.nav.careers },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Webistry — Home" className="shrink-0">
          <Logo size={28} />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-md" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Change language"
              aria-expanded={langOpen}
              className="size-9 inline-flex items-center justify-center rounded-md hover:bg-secondary transition-colors text-sm font-medium"
            >
              <Globe className="size-4" />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute end-0 mt-2 w-32 rounded-lg surface-card shadow-xl z-20 p-1">
                  {LOCALES.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLocale(l as Locale); setLangOpen(false); }}
                      className={`w-full text-start px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors ${
                        locale === l ? "text-foreground font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {LOCALE_LABELS[l]} · {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="size-9 inline-flex items-center justify-center rounded-md hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex ms-2 items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            {t.nav.startProject}
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden size-9 inline-flex items-center justify-center rounded-md hover:bg-secondary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav aria-label="Mobile" className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-3 text-base text-foreground rounded-md hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-4 py-3 text-center text-sm font-medium rounded-md bg-foreground text-background"
            >
              {t.nav.startProject}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
