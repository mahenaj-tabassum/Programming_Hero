"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Docs", "https://better-auth.com/"],
  ["GitHub", "#"],
] as const;

export default function Navbar() {
  const { data: session, isPending } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Gatekeeper
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-5">
          {isPending ? (
            <span className="text-sm text-muted">Loading...</span>
          ) : session?.user ? (
            <>
              <span className="text-sm text-muted">
                Hi! {session.user.name?.split(" ")[0]}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-lg cursor-pointer bg-accent px-3.5 py-2 text-sm font-medium text-bg transition hover:brightness-110"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:text-ink"
              >
                Sign in
              </Link>

              <Link
                href="/sign-up"
                className="rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-bg transition hover:brightness-110"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
