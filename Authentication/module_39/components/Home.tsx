import Image from "next/image";
import Link from "next/link";

const stroke = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const shield = "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z";

const features = [
  {
    title: "Sign up and sign in",
    text: "Email and password accounts with sessions that stay signed in.",
    span: "lg:col-span-4",
    icon: (
      <svg {...stroke}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    title: "Google and GitHub",
    text: "Let people continue with the account they already have.",
    span: "lg:col-span-4",
    icon: (
      <svg {...stroke}>
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="12" r="3" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    title: "Email verification",
    text: "Confirm every address before the account goes live.",
    span: "lg:col-span-4",
    icon: (
      <svg {...stroke}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Password reset",
    text: "A secure link by email when someone forgets their password.",
    span: "lg:col-span-3",
    icon: (
      <svg {...stroke}>
        <path d="M20 12a8 8 0 1 1-2.5-5.8" />
        <path d="M20 4v5h-5" />
      </svg>
    ),
  },
  {
    title: "Roles and protected routes",
    text: "Keep admin pages for admins and dashboards for signed-in users.",
    span: "lg:col-span-6",
    wide: true,
    icon: (
      <svg {...stroke}>
        <path d={shield} />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 13v3" />
      </svg>
    ),
  },
  {
    title: "Safe by default",
    text: "Rate limiting, validated input and secure cookies are on from day one.",
    span: "lg:col-span-3",
    icon: (
      <svg {...stroke}>
        <path d={shield} />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

const delay = (s: string) => ({ "--d": s }) as React.CSSProperties;

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="grid-fade pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-140 w-140 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16= lg:grid-cols-[1.1fr_1fr] lg:py-10">
          <div>
            <p className="rise flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
              Gatekeeper · Authentication
            </p>

            <h1
              style={delay("0.08s")}
              className="rise mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[3.9rem]"
            >
              Authentication that <br className="hidden sm:block" />
              is ready for <br className="hidden sm:block" />
              <span className="text-accent">production.</span>
            </h1>

            <p
              style={delay("0.16s")}
              className="rise mt-7 max-w-136 text-[17px] leading-relaxed text-muted lg:text-lg"
            >
              Gatekeeper is a Next.js starter with sign-in, social login, email
              verification and role-based access already in place.
            </p>

            <div
              style={delay("0.24s")}
              className="rise mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/signup"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-bg transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                Create an account
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-line px-6 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-surface"
              >
                See what is included
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div style={delay("0.2s")} className="rise relative">
            <div className="group relative aspect-[4/4.6] max-h-150 w-full lg:aspect-4/5">
              <Image
                src="/hero-identity.svg"
                alt="A friendly cartoon robot guard holding a golden key and a shield with a check mark"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain transition-transform duration-1400 ease-out"
              />

              <div className="float absolute bottom-5 left-5 w-60 rounded-2xl border border-line bg-surface/90 p-4 shadow-2xl shadow-black/50 backdrop-blur">
                <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Session active
                </p>
                <p className="mt-3 text-sm font-medium">
                  Authentication secured
                </p>
                <p className="mt-2 text-sm text-muted">
                  <span className="text-accent">✓</span> Email verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology strip */}
      <div className="border-t border-line py-8">
        <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 text-xs font-medium uppercase tracking-[0.22em] text-muted">
          <span>Next.js</span>
          <span aria-hidden className="text-line">
            ·
          </span>
          <span>BetterAuth</span>
          <span aria-hidden className="text-line">
            ·
          </span>
          <span>MongoDB</span>
        </p>
      </div>

      {/* Features */}
      <section id="features" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything a sign-in flow needs
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Built with Next.js, BetterAuth and MongoDB, so you can clone it
              and start your product.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {features.map(({ title, text, icon, span, wide }) => (
              <article
                key={title}
                className={`group relative flex min-h-55 flex-col justify-between overflow-hidden rounded-[20px] border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-muted/40 hover:bg-[color-mix(in_srgb,var(--color-surface),white_4%)] ${span}`}
              >
                {wide && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/10 blur-3xl"
                  />
                )}
                <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-line text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                  {icon}
                </div>
                <div className="relative mt-10">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        Gatekeeper, an authentication starter.
      </footer>
    </main>
  );
}
