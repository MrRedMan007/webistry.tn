import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/i18n/context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}var l=localStorage.getItem('locale')||'en';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t;document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';}catch(e){document.documentElement.classList.add('dark');}})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold gold-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Something didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90">
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#000000" },
      { title: "Webistry — Premium software studio. We transform ideas into digital products." },
      { name: "description", content: "Webistry is a premium Tunisian software studio crafting refined, high-performance web, mobile and enterprise software for ambitious teams worldwide." },
      { name: "author", content: "Webistry" },
      { name: "keywords", content: "Webistry, software studio, Tunisia, web development, mobile apps, UI UX, branding, cybersecurity, custom software" },
      { property: "og:site_name", content: "Webistry" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Webistry — We transform ideas into digital products" },
      { property: "og:description", content: "Premium Tunisian software studio. Web, mobile, desktop, UI/UX, branding, cybersecurity." },
      { property: "og:url", content: "https://webistry.tn" },
      { property: "og:image", content: "https://webistry.tn/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Webistry — Premium software studio" },
      { name: "twitter:description", content: "We transform ideas into digital products." },
      { name: "twitter:image", content: "https://webistry.tn/og-image.png" },
    ],
    links: [
  { rel: "stylesheet", href: appCss },

  { rel: "icon", href: "/favicon.ico", sizes: "any" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },

  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },

  { rel: "manifest", href: "/site.webmanifest" },

  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&family=Tajawal:wght@400;500;700&display=swap",
  },
],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Webistry",
          url: "https://webistry.tn",
          logo: "https://webistry.tn/og-image.png",
          email: "contact@webistry.tn",
          telephone: "+216 51 003 216",
          address: { "@type": "PostalAddress", addressCountry: "TN" },
          sameAs: [],
          description: "Premium Tunisian software studio building web, mobile and enterprise software.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-[100] focus:px-3 focus:py-2 focus:rounded-md focus:bg-foreground focus:text-background">Skip to content</a>
          <Navbar />
          <main id="main" className="min-h-dvh pt-16">
            <Outlet />
          </main>
          <Footer />
          <WhatsAppFab />
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
