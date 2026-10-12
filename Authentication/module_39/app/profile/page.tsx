import {
  Activity,
  ArrowLeft,
  Bell,
  Camera,
  Check,
  ChevronRight,
  Globe2,
  KeyRound,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Monitor,
  Network,
  Pencil,
  Save,
  ShieldCheck,
  Terminal,
  UserRound,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="pointer-events-none fixed inset-0 grid-fade" />

      <div className="relative">
        <div className="mx-auto max-w-350 px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
          {/* Page heading */}
          <div
            className="rise mb-10"
            style={{ "--d": "0.05s" } as React.CSSProperties}
          >
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
              Account
            </p>

            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Your profile
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              Manage your personal information, security preferences, and
              development environment.
            </p>
          </div>

          {/* Profile hero */}
          <section
            className="rise relative overflow-hidden rounded-2xl border border-line bg-surface"
            style={{ "--d": "0.1s" } as React.CSSProperties}
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Avatar */}
                  <div className="group relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 font-display text-3xl font-semibold text-accent sm:h-28 sm:w-28 sm:text-4xl">
                      D
                    </div>

                    <button className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-bg text-muted shadow-lg transition hover:border-accent/40 hover:text-accent">
                      <Camera size={15} />
                    </button>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-2xl font-semibold tracking-tight">
                        Developer
                      </h2>

                      <span className="flex items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-2 py-1 text-[9px] uppercase tracking-wider text-accent">
                        <Check size={10} />
                        Verified
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-muted">
                      developer@example.com
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-muted">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        Development environment
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Globe2 size={13} />
                        UTC +06:00
                      </span>
                    </div>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-2 rounded-xl border border-line bg-bg px-4 py-2.5 text-xs font-medium text-ink transition hover:border-accent/40">
                  <Pencil size={14} />
                  Edit profile
                </button>
              </div>
            </div>
          </section>

          {/* Content */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Left */}
            <div className="space-y-6">
              {/* Personal information */}
              <section
                className="rise rounded-2xl border border-line bg-surface"
                style={{ "--d": "0.15s" } as React.CSSProperties}
              >
                <div className="flex items-center justify-between border-b border-line p-5 sm:p-6">
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      Personal information
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                      Your basic account information
                    </p>
                  </div>

                  <button className="rounded-lg p-2 text-muted transition hover:bg-bg hover:text-ink">
                    <Pencil size={15} />
                  </button>
                </div>

                <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                  <ProfileField
                    icon={UserRound}
                    label="Full name"
                    value="Developer"
                  />

                  <ProfileField
                    icon={Mail}
                    label="Email address"
                    value="developer@example.com"
                  />

                  <ProfileField
                    icon={MapPin}
                    label="Location"
                    value="Development environment"
                  />

                  <ProfileField
                    icon={Globe2}
                    label="Timezone"
                    value="UTC +06:00"
                  />
                </div>
              </section>

              {/* Danger zone */}
              <section
                className="rise rounded-2xl border border-red-400/10 bg-surface"
                style={{ "--d": "0.25s" } as React.CSSProperties}
              >
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-base font-semibold text-red-300">
                    Danger zone
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-muted">
                    These actions can affect your account and development
                    environment.
                  </p>

                  <div className="mt-5 flex flex-col gap-3 rounded-xl border border-red-400/10 bg-red-400/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium">Sign out everywhere</p>
                      <p className="mt-1 text-xs text-muted">
                        End all active sessions on your account.
                      </p>
                    </div>

                    <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-red-400/20 px-3 py-2 text-xs text-red-300 transition hover:bg-red-400/5">
                      <LogOut size={13} />
                      Sign out
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* Developer environment */}
              <section
                className="rise overflow-hidden rounded-2xl border border-line bg-surface"
                style={{ "--d": "0.28s" } as React.CSSProperties}
              >
                <div className="border-b border-line p-5">
                  <div className="flex items-center gap-2">
                    <Terminal size={15} className="text-accent" />
                    <h3 className="font-display text-sm font-semibold">
                      Development environment
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <EnvironmentRow label="Environment" value="development" />
                  <EnvironmentRow label="Host" value="localhost" />
                  <EnvironmentRow label="Port" value="3000" />
                  <EnvironmentRow label="Status" value="Connected" active />
                </div>

                <div className="border-t border-line p-4">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-2.5 text-xs font-semibold text-bg transition hover:brightness-110">
                    <Terminal size={14} />
                    Open console
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Bottom save bar */}
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Save size={14} />
              </div>

              <div>
                <p className="text-xs font-medium">Profile settings</p>
                <p className="text-[10px] text-muted">
                  Changes are saved automatically.
                </p>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-semibold text-bg transition hover:brightness-110">
              <Check size={14} />
              Save changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* --------------------------------
   Small reusable components
-------------------------------- */

function ProfileStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-line px-6 py-5 first:border-0 sm:border-l">
      <p className="font-display text-xl font-semibold">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-muted">
        {label}
      </p>
    </div>
  );
}

function ProfileField({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-bg/50 p-4">
      <div className="mb-3 flex items-center gap-2 text-muted">
        <Icon size={14} />
        <span className="text-[10px] uppercase tracking-wider">{label}</span>
      </div>

      <p className="truncate text-sm">{value}</p>
    </div>
  );
}

function EnvironmentRow({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-muted">{label}</span>

      <span className={`font-mono ${active ? "text-accent" : "text-ink"}`}>
        {value}
      </span>
    </div>
  );
}
