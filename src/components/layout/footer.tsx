import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { Logo } from "@/components/logo";

const WA_URL = "https://wa.me/21651003216?text=" + encodeURIComponent("Hello Webistry, I would like to discuss my project with your team.");

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo size={32} />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">{t.footer.tagline}</p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:contact@webistry.tn" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="size-4" /> contact@webistry.tn
            </a>
            <a href={WA_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <MessageCircle className="size-4" /> +216 51 003 216
            </a>
            <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> Tunisia</span>
          </div>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.footer.company}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-foreground text-muted-foreground transition-colors">{t.nav.about}</Link></li>
            <li><Link to="/careers" className="hover:text-foreground text-muted-foreground transition-colors">{t.nav.careers}</Link></li>
            <li><Link to="/contact" className="hover:text-foreground text-muted-foreground transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.footer.work}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-foreground text-muted-foreground transition-colors">{t.nav.services}</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground text-muted-foreground transition-colors">{t.nav.portfolio}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.footer.legal}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-foreground text-muted-foreground transition-colors">{t.footer.privacy}</Link></li>
            <li><Link to="/terms" className="hover:text-foreground text-muted-foreground transition-colors">{t.footer.terms}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {year} Webistry. {t.footer.rights}</p>
          <p>webistry.tn</p>
        </div>
      </div>
    </footer>
  );
}
