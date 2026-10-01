"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { Spinner } from "@heroui/react";

export default function Navbar() {
  const { data: session, isPending } = useSession();

  const handleLogout = () => {
    signOut();
  };
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted"></span>
      </div>
    );
  }
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-10">
        <Link href="/" className="font-display text-2xl font-semibold">
          Halfmoon
        </Link>

        <div className="flex items-center gap-3 text-sm sm:text-base">
          {session?.user ? (
            <button className="cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link href="/sign-in">Sign in</Link>
          )}

          {!session?.user && (
            <Link
              href="/sign-up"
              className="rounded-full bg-deep px-4 py-2 font-bold text-on-deep"
            >
              Sign Up
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
