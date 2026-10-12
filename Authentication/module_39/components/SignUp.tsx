"use client";

import AuthShell, { Field } from "@/components/AuthShell";
import { signIn, signUp } from "@/lib/auth-client";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const { error } = await signUp.email({
      name: data.name.toString(),
      email: data.email.toString(),
      password: data.password.toString(),
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      setError(error.message ?? "Could not create your account. Try again");
      toast.error("Could not create your account. Try again");
      return;
    }
    toast.success("Account created successfully!");
  };

  const handleGoogleSignIn = async () => {
    toast.info("Logging in with google...");
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  const handleGithubSignIn = async () => {
    toast.info("Logging in with github...");

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
      title="Create your account"
      subtitle="It takes less than a minute."
      submitLabel="Create account"
      footerText="Already have an account?"
      footerLink="Sign in"
      footerHref="/sign-in"
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
      onGoogleSignIn={handleGoogleSignIn}
      onGithubSignIn={handleGithubSignIn}
      onDiscordSignIn={handleDiscordSignIn}
    >
      <Field
        label="Name"
        name="name"
        placeholder="Your full name"
        autoComplete="name"
      />

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
        placeholder="At least 8 characters"
        autoComplete="new-password"
      />
    </AuthShell>
  );
}
