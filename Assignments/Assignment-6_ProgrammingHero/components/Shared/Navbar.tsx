"use client";

import { MyPlanContext } from "@/Contexts/MyPlanContext";
import { ChevronRight, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const planContext = useContext(MyPlanContext);
  if (!planContext) {
    throw new Error("Error");
  }

  const { todaysPlan, savedPlans } = planContext;
  return (
    <nav className="border-b sticky top-0 bg-[#0B0D12] z-50 border-b-[#1C1F26]">
      <div className="flex flex-wrap md:flex-nowrap gap-y-3 justify-between items-center md:h-20 w-[92%] md:w-[85%] mx-auto py-3 md:py-0 ">
        <Image src="/nav-logo.png" width={93.41} height={30} alt="Nav Logo" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            className={`${
              pathname === "/"
                ? "px-5 py-2 bg-[#1A2312] rounded-full text-accent"
                : "text-body hover:bg-[#1A2312]/50 hover:text-white"
            } rounded-full px-5 py-2 transition-all duration-300 ease-in-out  text-[15px]`}
            href="/"
          >
            Workouts
          </Link>
          <Link
            className={`${
              pathname === "/my-plan"
                ? "px-5 py-2 bg-[#1A2312] rounded-full text-accent"
                : "text-body hover:bg-[#1A2312]/50 hover:text-white"
            } rounded-full px-5 py-2 transition-all duration-300 ease-in-out  text-[15px]`}
            href="/my-plan"
          >
            My Plan
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          <button className="cursor-pointer flex items-center gap-3">
            <Link href="/my-plan">Plan</Link>
            <span className="inline-flex items-center justify-center text-[12px] text-black h-6 w-6 rounded-full bg-accent">
              {todaysPlan.length}
            </span>
          </button>
          <button className="cursor-pointer flex items-center gap-3">
            <Link href="/my-plan">Saved</Link>
            <span className="inline-flex items-center justify-center shrink-0 text-[12px]  h-6 w-6 rounded-full border border-[#2D313B]">
              {savedPlans.length}
            </span>
          </button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer p-1 "
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden py-5 absolute top-full inset-x-0 bg-[#0B0D12]/95 backdrop-blur-md border-b border-b-[#1C1F26] shadow-2xl shadow-black/40 transition-all duration-300 ease-out ${
              menuOpen
                ? "opacity-100 translate-y-"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {/* Links */}
            <div className="w-[92%] mx-auto py-5 flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`${
                  pathname === "/"
                    ? "bg-[#1A2312] text-accent border-accent/20"
                    : "text-body border-transparent hover:bg-[#1A2312]/50 hover:text-white"
                } flex items-center justify-between rounded-2xl border px-5 py-3.5 text-base font-medium transition-all duration-300`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full transition-colors ${
                      pathname === "/" ? "bg-accent" : "bg-[#2D313B]"
                    }`}
                  />
                  Workouts
                </span>
                <ChevronRight className="opacity-60 h-4.5" />
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className={`${
                  pathname === "/my-plan"
                    ? "bg-[#1A2312] text-accent border-accent/20"
                    : "text-body border-transparent hover:bg-[#1A2312]/50 hover:text-white"
                } flex items-center justify-between rounded-2xl border px-5 py-3.5 text-base font-medium transition-all duration-300`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full transition-colors ${
                      pathname === "/my-plan" ? "bg-accent" : "bg-[#2D313B]"
                    }`}
                  />
                  My Plan
                </span>
                <ChevronRight className="opacity-60 h-4.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
