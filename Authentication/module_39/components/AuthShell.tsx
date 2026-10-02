"use client";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const input =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  aside?: ReactNode;
};

export function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  aside,
}: FieldProps) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="grid gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
        {aside}
      </div>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={isPassword && show ? "text" : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`${input} ${isPassword ? "pr-11" : ""}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            aria-pressed={show}
            className="absolute inset-y-0 right-0 grid w-11 place-items-center text-muted transition-colors hover:text-gray-800 cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
              {show && <path d="M4 4l16 16" />}
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

// Styling only. Wire up the form action and the social buttons yourself.
type AuthShellProps = {
  title: string;
  subtitle: string;
  submitLabel: string;
  footerText: string;
  footerLink: string;
  footerHref: string;
  children: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  loading?: boolean;
  onGoogleSignIn?: () => void;
  onGithubSignIn?: () => void;
};

export default function AuthShell({
  title,
  subtitle,
  submitLabel,
  footerText,
  footerLink,
  footerHref,
  children,
  onSubmit,
  error,
  loading,
  onGoogleSignIn,
  onGithubSignIn,
}: AuthShellProps) {
  const social =
    "rounded-lg border border-line bg-bg px-4 py-2.5 text-sm transition-colors hover:bg-white/5";
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-5 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-105 w-155 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-line bg-surface p-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted">{subtitle}</p>

        <div className="mt-7 grid gap-3">
          <button
            type="button"
            onClick={onGoogleSignIn}
            className={`${social} flex items-center cursor-pointer justify-center gap-3`}
          >
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button
            type="button"
            onClick={onGithubSignIn}
            className={`${social} flex items-center cursor-pointer justify-center gap-3`}
          >
            <FaGithub size={20} /> Continue with GitHub
          </button>
        </div>

        <div className="my-6 flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-line" />
          or use your email
          <span className="h-px flex-1 bg-line" />
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          {children}
          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-lg cursor-pointer bg-accent px-4 py-2.5 text-sm font-medium text-bg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Please wait..." : submitLabel}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          {footerText}{" "}
          <Link href={footerHref} className="text-accent hover:underline">
            {footerLink}
          </Link>
        </p>
      </div>
    </main>
  );
}
