"use client";
import Link from "next/link";
import AuthShell, { Field } from "@/components/AuthShell";
import React, { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";

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
      setError(
        error.message ?? "Server error. Unable to sign in. Please try again.",
      );
      return;
    }
  };
  const handleGoogleSignIn = async () => {
    toast.info("Logging in with google...");
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  const handleGithubSignIn = async () => {
    toast.info("Logged in with github...");

    await signIn.social({
      provider: "github",
    });
  };
  const handleDiscordSignIn = async () => {
    toast.info("Logging in with discord...");
    await signIn.social({
      provider: "discord",
    });
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
      onGoogleSignIn={handleGoogleSignIn}
      onGithubSignIn={handleGithubSignIn}
      onDiscordSignIn={handleDiscordSignIn}
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
