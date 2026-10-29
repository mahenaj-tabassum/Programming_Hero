import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type User = {
  _id: string;
  name: string;
  email: string;
  age: number;
  city: string;
};

type UserDetailsProps = {
  userData: User;
};

const UserDetails = ({ userData }: UserDetailsProps) => {
  const initials = userData.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <main className="min-h-screen bg-[#101210] px-4 py-10 text-[#F2F4EC] sm:px-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Page heading */}
        <header className="space-y-3 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              People, <span className="text-[#B9F65B]">up close.</span>
            </h1>

            <p className="text-sm text-[#A0A79A] sm:text-base">
              Personal information retrieved from your backend API.
            </p>
          </div>

          {/* Back navigation */}
          <Button
            variant="ghost"
            className="text-[#A0A79A] border border-gray-600 hover:bg-[#1B1F1B] hover:text-[#B9F65B]"
          >
            <Link href="/users" className="flex items-center">
              <ArrowRight className="mr-2 size-4" />
              Back to users
            </Link>
          </Button>
        </header>

        {/* Profile card */}
        <Card className="overflow-hidden border-[#30372C] bg-[#1B1F1B] text-[#F2F4EC] shadow-2xl shadow-black/20">
          {/* Decorative cover */}
          <div className="relative h-32 overflow-hidden bg-[#24351C]">
            <div className="absolute -right-8 -top-20 size-56 rounded-full border border-[#B9F65B]/20" />
            <div className="absolute -right-4 -top-12 size-40 rounded-full border border-[#B9F65B]/20" />
            <div className="flex px-10 py-5 items-center justify-between">
              {/* Avatar and identity */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div
                  className={cn(
                    "flex size-20 shrink-0 items-center justify-center",
                    "rounded-2xl border-4 border-[#1B1F1B]",
                    "bg-[#35432C] text-2xl font-bold text-[#D2FFA0]",
                  )}
                >
                  {initials || <UserRound className="size-8" />}
                </div>

                <div className="min-w-0 pb-1">
                  <h2 className="break-words text-2xl font-semibold sm:text-3xl">
                    {userData.name}
                  </h2>

                  <p className="mt-1 break-all text-sm text-[#A0A79A]">
                    {userData.email}
                  </p>
                </div>
              </div>
              <p className=" text-xs font-medium tracking-[0.2em] text-[#B9F65B]">
                USER MANAGEMENT / DETAILS
              </p>
            </div>
          </div>

          <CardContent className="px-5 pb-7 sm:px-8">
            {/* User information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Age */}
              <div className="rounded-xl border border-[#30372C] bg-[#101210] p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#24351C] p-2.5">
                    <CalendarDays className="size-5 text-[#B9F65B]" />
                  </div>

                  <div>
                    <p className="text-sm text-[#A0A79A]">Age</p>
                    <p className="mt-1 text-xl font-semibold">
                      {userData.age} years old
                    </p>
                  </div>
                </div>
              </div>

              {/* City */}
              <div className="rounded-xl border border-[#30372C] bg-[#101210] p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#24351C] p-2.5">
                    <MapPin className="size-5 text-[#B9F65B]" />
                  </div>

                  <div>
                    <p className="text-sm text-[#A0A79A]">City</p>
                    <p className="mt-1 text-xl font-semibold">
                      {userData.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-[#30372C] bg-[#101210] p-5 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#24351C] p-2.5">
                    <Mail className="size-5 text-[#B9F65B]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-[#A0A79A]">Email address</p>
                    <p className="mt-1 break-all font-medium">
                      {userData.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MongoDB ID */}
            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold tracking-wider text-[#8D9686]">
                UNIQUE USER IDENTIFIER
              </p>

              <div className="rounded-xl border border-[#30372C] bg-[#101210] p-4">
                <code className="break-all text-sm text-[#D2FFA0]">
                  {userData._id}
                </code>
              </div>
            </div>

            {/* API information */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#30372C] bg-[#24351C]/40 p-4">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#B9F65B]" />

              <div>
                <p className="text-sm font-medium">Connected to your API</p>
                <p className="mt-1 text-xs leading-5 text-[#A0A79A]">
                  This profile displays the user data returned by your server.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-[#687263]">
          USER ID · {userData._id}
        </p>
      </div>
    </main>
  );
};

export default UserDetails;
