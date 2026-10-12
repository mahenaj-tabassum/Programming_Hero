// app/dashboard/page.tsx

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronRight,
  CircleDot,
  Clock3,
  Globe2,
  Home,
  Layers3,
  LockKeyhole,
  LogOut,
  Menu,
  MoreHorizontal,
  Network,
  Search,
  Settings,
  ShieldCheck,
  Terminal,
  UserRound,
  X,
  Zap,
} from "lucide-react";

const stats = [
  {
    label: "Requests Today",
    value: "12,842",
    change: "+18.4%",
    icon: Activity,
  },
  {
    label: "Protected Routes",
    value: "24",
    change: "+4",
    icon: ShieldCheck,
  },
  {
    label: "Avg. Response",
    value: "42ms",
    change: "-12.8%",
    icon: Zap,
  },
  {
    label: "Blocked Requests",
    value: "284",
    change: "+8.2%",
    icon: LockKeyhole,
  },
];

const requests = [
  {
    method: "GET",
    path: "/dashboard",
    status: 200,
    ip: "192.168.1.24",
    time: "12ms",
    ago: "Just now",
    protected: true,
  },
  {
    method: "GET",
    path: "/api/users",
    status: 200,
    ip: "172.16.0.12",
    time: "38ms",
    ago: "24 sec ago",
    protected: true,
  },
  {
    method: "POST",
    path: "/api/auth/login",
    status: 401,
    ip: "103.42.18.91",
    time: "21ms",
    ago: "1 min ago",
    protected: true,
  },
  {
    method: "GET",
    path: "/",
    status: 200,
    ip: "45.119.84.20",
    time: "8ms",
    ago: "2 min ago",
    protected: false,
  },
  {
    method: "GET",
    path: "/settings",
    status: 302,
    ip: "103.91.42.17",
    time: "17ms",
    ago: "3 min ago",
    protected: true,
  },
];

const routes = [
  {
    path: "/",
    type: "Public",
    requests: "4,291",
    status: "Active",
  },
  {
    path: "/dashboard",
    type: "Protected",
    requests: "2,842",
    status: "Active",
  },
  {
    path: "/profile",
    type: "Protected",
    requests: "1,924",
    status: "Active",
  },
  {
    path: "/settings",
    type: "Protected",
    requests: "842",
    status: "Active",
  },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-line bg-surface lg:flex lg:flex-col">
      <div className="flex h-20 items-center border-b border-line px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-bg">
            <Network size={18} strokeWidth={2.5} />
          </div>

          <div>
            <p className="font-display text-[15px] font-semibold tracking-tight">
              PROXYLAB
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Developer Console
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-3 py-6">
        <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          Workspace
        </p>

        <nav className="space-y-1">
          <SidebarItem icon={Home} label="Overview" active />
          <SidebarItem icon={Activity} label="Requests" />
          <SidebarItem icon={ShieldCheck} label="Routes" />
          <SidebarItem icon={BarChart3} label="Analytics" />
        </nav>

        <p className="mb-3 mt-9 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          System
        </p>

        <nav className="space-y-1">
          <SidebarItem icon={Terminal} label="Logs" />
          <SidebarItem icon={Settings} label="Settings" />
        </nav>
      </div>

      <div className="border-t border-line p-4">
        <div className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-bg">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg">
            <UserRound size={16} className="text-muted" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Developer</p>
            <p className="truncate text-xs text-muted">localhost:3000</p>
          </div>

          <button className="text-muted transition hover:text-ink">
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`group cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
        active
          ? "bg-accent/10 text-accent"
          : "text-muted hover:bg-bg hover:text-ink"
      }`}
    >
      <Icon size={17} />
      <span>{label}</span>

      {active && <ChevronRight size={14} className="ml-auto opacity-70" />}
    </button>
  );
}

function StatCard({
  label,
  value,
  change,
  icon: Icon,
}: {
  label: string;
  value: string;
  change: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rise rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-bg text-muted">
          <Icon size={17} />
        </div>

        <span className="rounded-full border border-accent/20 bg-accent/5 px-2 py-1 text-[10px] font-medium text-accent">
          {change}
        </span>
      </div>

      <p className="text-xs text-muted">{label}</p>

      <p className="mt-1 font-display text-2xl font-semibold tracking-tight">
        {value}
      </p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="pointer-events-none fixed inset-0 grid-fade" />

      <div className="relative flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          {/* Mobile header */}
          <header className="flex h-20 items-center justify-between border-b border-line px-5 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-bg">
                <Network size={18} />
              </div>

              <span className="font-display font-semibold">PROXYLAB</span>
            </div>

            <button className="rounded-lg border border-line p-2 text-muted">
              <Menu size={19} />
            </button>
          </header>

          <div className="mx-auto max-w-375 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            {/* Top bar */}
            <div className="rise flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs text-muted">
                  <span>Workspace</span>
                  <ChevronRight size={12} />
                  <span className="text-ink">Overview</span>
                </div>

                <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Dashboard
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  Monitor your application traffic, routes, and request flow
                  from one place.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="rounded-xl border border-line bg-surface p-2.5 text-muted transition hover:border-accent/40 hover:text-ink">
                  <Search size={17} />
                </button>

                <button className="rounded-xl border border-line bg-surface p-2.5 text-muted transition hover:border-accent/40 hover:text-ink">
                  <Bell size={17} />
                </button>

                <button className="hidden items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition hover:brightness-110 sm:flex">
                  <Terminal size={16} />
                  View Logs
                </button>
              </div>
            </div>

            {/* Status */}
            <div
              className="rise mt-8 flex flex-col gap-3 rounded-2xl border border-accent/20 bg-accent/4 p-4 sm:flex-row sm:items-center sm:justify-between"
              style={{ "--d": "0.08s" } as React.CSSProperties}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
                  <span className="absolute h-2 w-2 animate-pulse rounded-full bg-accent" />
                  <CircleDot size={18} className="text-accent" />
                </div>

                <div>
                  <p className="text-sm font-medium">Proxy layer is active</p>
                  <p className="text-xs text-muted">
                    All systems operational · Last checked just now
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full border border-accent/20 px-3 py-1 text-[10px] uppercase tracking-wider text-accent">
                Operational
              </span>
            </div>

            {/* Stats */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  style={
                    {
                      "--d": `${0.12 + index * 0.05}s`,
                    } as React.CSSProperties
                  }
                >
                  <StatCard {...stat} />
                </div>
              ))}
            </div>

            {/* Main grid */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* Traffic */}
              <div className="rounded-2xl border border-line bg-surface">
                <div className="flex items-center justify-between border-b border-line p-5">
                  <div>
                    <p className="font-display text-base font-semibold">
                      Request activity
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Incoming requests through your application
                    </p>
                  </div>

                  <button className="rounded-lg p-2 text-muted transition hover:bg-bg hover:text-ink">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-175 text-left">
                    <thead>
                      <tr className="border-b border-line text-[10px] uppercase tracking-[0.15em] text-muted">
                        <th className="px-5 py-3 font-medium">Request</th>
                        <th className="px-5 py-3 font-medium">Status</th>
                        <th className="px-5 py-3 font-medium">Source</th>
                        <th className="px-5 py-3 font-medium">Latency</th>
                        <th className="px-5 py-3 font-medium">Time</th>
                      </tr>
                    </thead>

                    <tbody>
                      {requests.map((request) => (
                        <tr
                          key={`${request.path}-${request.ago}`}
                          className="border-b border-line/70 transition last:border-0 hover:bg-bg/50"
                        >
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <span className="rounded-md border border-line bg-bg px-2 py-1 font-mono text-[10px] text-muted">
                                {request.method}
                              </span>

                              <div>
                                <p className="font-mono text-xs">
                                  {request.path}
                                </p>

                                {request.protected && (
                                  <div className="mt-1 flex items-center gap-1 text-[9px] text-accent">
                                    <LockKeyhole size={9} />
                                    Protected
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-4">
                            <span
                              className={`inline-flex items-center gap-1.5 text-xs ${
                                request.status === 200
                                  ? "text-accent"
                                  : request.status === 302
                                    ? "text-muted"
                                    : "text-orange-300"
                              }`}
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-current" />
                              {request.status}
                            </span>
                          </td>

                          <td className="px-5 py-4 font-mono text-xs text-muted">
                            {request.ip}
                          </td>

                          <td className="px-5 py-4 font-mono text-xs text-muted">
                            {request.time}
                          </td>

                          <td className="px-5 py-4 text-xs text-muted">
                            {request.ago}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-line p-4">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-medium text-muted transition hover:bg-bg hover:text-ink">
                    View all requests
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>

              {/* Route overview */}
              <div className="rounded-2xl border border-line bg-surface">
                <div className="flex items-center justify-between border-b border-line p-5">
                  <div>
                    <p className="font-display text-base font-semibold">
                      Route overview
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Your {"application's"} route surface
                    </p>
                  </div>

                  <button className="rounded-lg border border-line p-2 text-muted transition hover:border-accent/30 hover:text-ink">
                    <Layers3 size={16} />
                  </button>
                </div>

                <div className="divide-y divide-line">
                  {routes.map((route) => (
                    <div
                      key={route.path}
                      className="flex items-center gap-4 px-5 py-4 transition hover:bg-bg/50"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-bg">
                        {route.type === "Protected" ? (
                          <LockKeyhole size={15} className="text-accent" />
                        ) : (
                          <Globe2 size={15} className="text-muted" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-xs">{route.path}</p>
                        <p className="mt-1 text-[10px] text-muted">
                          {route.requests} requests
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[10px] text-accent">
                          {route.status}
                        </p>
                        <p className="mt-1 text-[9px] text-muted">
                          {route.type}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-line py-2.5 text-xs font-medium text-muted transition hover:border-accent/30 hover:text-ink">
                    Manage routes
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {/* Terminal */}
              <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={15} className="text-accent" />
                    <span className="font-mono text-xs">request.log</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  </div>
                </div>

                <div className="space-y-2 p-5 font-mono text-[11px] leading-6">
                  <p>
                    <span className="text-muted">19:31:42</span>{" "}
                    <span className="text-accent">GET</span>{" "}
                    <span>/dashboard</span>{" "}
                    <span className="text-muted">200</span>
                  </p>

                  <p>
                    <span className="text-muted">19:31:41</span>{" "}
                    <span className="text-accent">GET</span>{" "}
                    <span>/api/users</span>{" "}
                    <span className="text-muted">200</span>
                  </p>

                  <p>
                    <span className="text-muted">19:31:39</span>{" "}
                    <span className="text-orange-300">POST</span>{" "}
                    <span>/api/auth/login</span>{" "}
                    <span className="text-orange-300">401</span>
                  </p>

                  <p>
                    <span className="text-muted">19:31:36</span>{" "}
                    <span className="text-accent">GET</span>{" "}
                    <span>/profile</span>{" "}
                    <span className="text-muted">200</span>
                  </p>

                  <p className="text-muted">
                    <span className="animate-pulse">▋</span>
                  </p>
                </div>
              </div>

              {/* Session card */}
              <div className="float relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.045] p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-bg">
                      <ShieldCheck size={19} />
                    </div>

                    <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      Active
                    </span>
                  </div>

                  <p className="font-display text-xl font-semibold">
                    Development session
                  </p>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    Your local development environment is connected and ready to
                    receive requests.
                  </p>

                  <div className="mt-7 space-y-3 border-t border-accent/10 pt-5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted">Environment</span>
                      <span className="font-mono">development</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-muted">Port</span>
                      <span className="font-mono">3000</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-muted">Uptime</span>
                      <span className="font-mono">02:41:18</span>
                    </div>
                  </div>

                  <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-xs font-semibold text-bg transition hover:brightness-110">
                    <Clock3 size={14} />
                    Session details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
