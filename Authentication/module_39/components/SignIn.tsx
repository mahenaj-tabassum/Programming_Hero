"use client";
import Link from "next/link";
import AuthShell, { Field } from "@/components/AuthShell";
import React, { useState } from "react";
import { signIn } from "@/lib/auth-client";

export default function SignIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(false);

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const { error } = await signIn.email({
      email: data.email.toString(),
      password: data.password.toString(),
      callbackURL: "/",
    });
    setLoading(false);
    if (error) {
      setError(error.message ?? "Could not create your account. Try again.");
      return;
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to open your dashboard."
      submitLabel="Sign in"
      footerText="New to Gatekeeper?"
      footerLink="Create an account"
      footerHref="/sign-up"
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    >
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
      />
      <Field
        label="Password"
        name="password"
        type="password"
        placeholder="Your password"
        autoComplete="current-password"
        aside={
          <Link href="#" className="text-xs text-muted hover:text-ink">
            Forgot password?
          </Link>
        }
      />
    </AuthShell>
  );
}
