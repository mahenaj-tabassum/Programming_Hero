"use client";
import { Ripple } from "@/types/bookType";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const pathname = usePathname();

  const rippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;

    const newRipple = {
      id: Date.now(),
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 650);
  };
  useEffect(() => {
    const handleScroll = () => {
      // condition
      // If window.scrollY > 12, setScrolled(false) else true
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const updateHeight = () => {
      if (mobileMenuRef.current) {
        setMenuHeight(mobileMenuRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 w-full ${
        scrolled
          ? "border-(--hair) shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
          : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 shrink-0"
            href="/"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6.5C4 5.11929 5.11929 4 6.5 4H14V25H6.5C5.11929 25 4 23.8807 4 22.5V6.5Z"
                fill="#2563EB"
              />
              <path
                d="M26 6.5C26 5.11929 24.8807 4 23.5 4H16V25H23.5C24.8807 25 26 23.8807 26 22.5V6.5Z"
                fill="#7C3AED"
              />
              <path
                d="M15 4H15.4C15.7314 4 16 4.26863 16 4.6V24.4C16 24.7314 15.7314 25 15.4 25H15V4Z"
                fill="#0F172A"
                fillOpacity="0.15"
              />
            </svg>

            <span className="font-serif text-[21px] font-semibold tracking-tight text-ink">
              Book Vive
            </span>
          </Link>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-9 text-[15px] font-medium">
            <Link
              className={`nav-link ${pathname === "/" ? "nav-active" : ""}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link ${pathname === "/books" ? "nav-active" : ""}`}
              href="/books"
            >
              Books
            </Link>
            <Link
              className={`nav-link ${pathname === "/listed-books" ? "nav-active" : ""}`}
              href="/listed-books"
            >
              Listed Books
            </Link>
            <Link
              className={`nav-link ${pathname === "/chart" ? "nav-active" : ""}`}
              href="/chart"
            >
              Pages to Read
            </Link>
          </div>
          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full btn-outline text-sm font-semibold">
              Login
            </button>
            <button
              onClick={rippleEffect}
              className="px-5 py-2.5 rounded-full btn-primary text-sm font-semibold"
            >
              Register
              {ripples.map((r) => (
                <span
                  key={r.id}
                  className="ripple"
                  style={{
                    width: r.size,
                    height: r.size,
                    left: r.x,
                    top: r.y,
                  }}
                />
              ))}
            </button>
          </div>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            id="menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="md:hidden cursor-pointer flex flex-col justify-center items-center w-10 h-10 gap-1.25"
          >
            <span
              className={`hamburger-line block w-6 h-0.5 duration-300 bg-ink transition-all ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
            ></span>
            <span
              className={`hamburger-line block w-6 h-0.5 duration-300 bg-ink transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`hamburger-line block w-6 h-0.5 duration-300 bg-ink transition-all ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          ref={mobileMenuRef}
          style={{
            maxHeight: menuOpen ? `${menuHeight}px` : "0px",
          }}
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col gap-1 pb-5 pt-1 text-[15px] font-medium border-t border-hair">
            <Link
              onClick={() => setMenuOpen(false)}
              className={`nav-link py-3 ${pathname === "/" ? "nav-active" : ""}`}
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className={`nav-link py-3 ${pathname === "/books" ? "nav-active" : ""}`}
              href="/books"
            >
              Books
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className={`nav-link py-3 ${pathname === "/listed-books" ? "nav-active" : ""}`}
              href="/listed-books"
            >
              Listed Books
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className={`nav-link py-3 ${pathname === "/chart" ? "nav-active" : ""}`}
              href="/chart"
            >
              Pages to Read
            </Link>
            <div className="flex gap-3 pt-3">
              <button className="btn-outline flex-1 py-2.5 rounded-full text-sm font-semibold">
                Login
              </button>
              <button
                onClick={rippleEffect}
                className="btn-primary flex-1 py-2.5 rounded-full text-sm font-semibold"
              >
                Register
                {ripples.map((r) => (
                  <span
                    key={r.id}
                    className="ripple"
                    style={{
                      width: r.size,
                      height: r.size,
                      left: r.x,
                      top: r.y,
                    }}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
