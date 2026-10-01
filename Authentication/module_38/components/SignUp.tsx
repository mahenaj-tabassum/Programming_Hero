"use client";

import { signUp } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Stops the page reload
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: responseData, error } = await signUp.email({
      name: data.name.toString(),
      email: data.email.toString(),
      password: data.password.toString(),
    });
  };

  return (
    <div className="dark relative z-10 w-full max-w-md" data-theme="dark">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
            <Check className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Start your journey in less than a minute
          </p>
        </div>

        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="text-zinc-300">Name</Label>
            <Input
              className="bg-white/5 text-white placeholder:text-zinc-500"
              placeholder="John Doe"
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-zinc-300">Email</Label>
            <Input
              placeholder="john@example.com"
              className="bg-white/5 text-white placeholder:text-zinc-500"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type={showPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <div className="flex items-center justify-between">
              <Label className="text-zinc-300">Password</Label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center cursor-pointer gap-1 text-xs text-slate-400 transition-colors hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <Eye /> : <EyeSlash />}
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <Input
              placeholder="Enter your password"
              className="bg-white/5 text-white placeholder:text-zinc-500"
            />
            <Description className="text-zinc-500">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="mt-2 flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-90"
            >
              <Check />
              Submit
            </Button>
            <Button
              type="reset"
              variant="secondary"
              className="border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
            >
              Reset
            </Button>
          </div>
        </Form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <a href="/sign-in" className="text-indigo-400 hover:text-indigo-300">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
