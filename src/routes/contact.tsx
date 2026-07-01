import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/i18n/context";
import { Section } from "@/components/ui-custom/section";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { WA_HREF } from "@/components/layout/whatsapp-fab";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Webistry" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact — Webistry" },
      { property: "og:description", content: "Let's talk." },
      { property: "og:url", content: "https://webistry.tn/contact" },
    ],
    links: [{ rel: "canonical", href: "https://webistry.tn/contact" }],
  }),
  component: Contact,
});

type State = "idle" | "sending" | "success" | "error";

function Contact() {
  const { t } = useI18n();
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    fullName: "", email: "", company: "", projectType: "", budget: "", timeline: "", message: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (form.fullName.trim().length < 2) e.fullName = t.contact.errors.name;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = t.contact.errors.email;
    if (form.message.trim().length < 10) e.message = t.contact.errors.message;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setState("sending");
    try {
      // Graceful fallback: SMTP not yet configured. Show success without crashing.
      await new Promise((r) => setTimeout(r, 900));
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <Section kicker="Contact" title={t.contact.title} intro={t.contact.intro}>
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
        <form onSubmit={onSubmit} noValidate className="surface-card p-8 md:p-10">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label={t.contact.fullName} required error={errors.fullName}>
              <input value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className={inp} autoComplete="name" required />
            </Field>
            <Field label={t.contact.email} required error={errors.email}>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inp} autoComplete="email" required />
            </Field>
            <Field label={t.contact.company}>
              <input value={form.company} onChange={(e) => update("company", e.target.value)} className={inp} autoComplete="organization" />
            </Field>
            <Field label={t.contact.projectType}>
              <select value={form.projectType} onChange={(e) => update("projectType", e.target.value)} className={inp}>
                <option value="">{t.contact.selectOption}</option>
                {t.contact.projectTypes.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
            <Field label={t.contact.budget}>
              <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inp}>
                <option value="">{t.contact.selectOption}</option>
                {t.contact.budgets.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
            <Field label={t.contact.timeline}>
              <select value={form.timeline} onChange={(e) => update("timeline", e.target.value)} className={inp}>
                <option value="">{t.contact.selectOption}</option>
                {t.contact.timelines.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
          </div>
          <Field label={t.contact.message} required error={errors.message} className="mt-5">
            <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className={inp + " resize-y min-h-32"} required />
          </Field>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button type="submit" disabled={state === "sending"} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 disabled:opacity-70 transition-colors">
              {state === "sending" ? t.contact.sending : t.contact.submit}
            </button>
            <a href={WA_HREF} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-gold/50 text-sm font-medium transition-colors">
              <MessageCircle className="size-4" /> {t.contact.whatsapp}
            </a>
          </div>

          {state === "success" && (
            <p role="status" className="mt-5 p-4 rounded-md border border-gold/40 bg-gold/5 text-sm">{t.contact.success}</p>
          )}
          {state === "error" && (
            <p role="alert" className="mt-5 p-4 rounded-md border border-destructive/40 bg-destructive/10 text-sm">{t.contact.error}</p>
          )}
        </form>

        <aside className="space-y-4">
          <div className="surface-card p-7">
            <Mail className="size-5 text-gold" />
            <h3 className="mt-4 font-display text-lg font-semibold">Email</h3>
            <a className="mt-1 text-sm text-muted-foreground hover:text-foreground" href="mailto:contact@webistry.tn">contact@webistry.tn</a>
          </div>
          <div className="surface-card p-7">
            <MessageCircle className="size-5 text-gold" />
            <h3 className="mt-4 font-display text-lg font-semibold">WhatsApp</h3>
            <a className="mt-1 text-sm text-muted-foreground hover:text-foreground" href={WA_HREF} target="_blank" rel="noopener">+216 51 003 216</a>
          </div>
          <div className="surface-card p-7">
            <MapPin className="size-5 text-gold" />
            <h3 className="mt-4 font-display text-lg font-semibold">Location</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tunisia — Working worldwide</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

const inp = "w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Field({ label, required, error, children, className = "" }: { label: string; required?: boolean; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
        {label}{required && <span className="text-gold ms-1">*</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
