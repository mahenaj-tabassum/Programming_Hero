"use client";

import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

const HomeComponent = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101210] px-6 py-12 text-[#F2F4EC]">
      <section className="w-full max-w-3xl rounded-3xl border border-[#30372C] bg-[#1B1F1B] px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-[#414A39] bg-[#252B23] text-[#B9F65B]">
          <Users className="size-8" />
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B9F65B]">
          CRUD Operation
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Manage your users,
          <span className="mt-2 block text-[#B9F65B]">all in one place.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#A0A79A] sm:text-base">
          Create new users, view their details, update information, and delete
          users from your directory — all from one simple dashboard.
        </p>

        <Link
          href="/users"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-[#B9F65B] px-6 py-3.5 font-semibold text-[#17200F] transition-colors hover:bg-[#D2FFA0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B9F65B]"
        >
          Open User Dashboard
          <ArrowRight className="size-5" />
        </Link>

        <p className="mt-5 text-xs text-[#7F8878]">
          Your user directory starts here.
        </p>
      </section>
    </main>
  );
};

export default HomeComponent;
