"use client";
import { signIn } from "@/lib/auth-client";
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
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: responseData, error } = await signIn.email({
      email: data.email.toString(),
      password: data.password.toString(),
      rememberMe: true,
      callbackURL: "/"
    });
  
  };

  return (
    <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-xl font-bold text-white shadow-lg">
          F
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Welcome back
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Sign in to continue to your account
        </p>
      </div>

      <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
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
          <Label className="text-slate-200">Email</Label>
          <Input placeholder="john@example.com" className="w-full" />
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
            <Label className="text-slate-200">Password</Label>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <Input placeholder="Enter your password" className="w-full" />
          <Description className="text-slate-400">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 font-medium text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-[1.02]"
          >
            <Check />
            Sign in
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      <p className="mt-6 text-center text-sm text-slate-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-indigo-400 hover:text-indigo-300"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
