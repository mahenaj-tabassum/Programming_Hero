"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const links = (
    <>
      <Link
        className={
          pathname === "/"
            ? "text-yellow-400 hover:text-red-500 font-semibold"
            : "text-blue-500 hover:text-red-500 font-semibold"
        }
        href="/"
      >
        Home
      </Link>

      <Link
        className={
          pathname === "/about"
            ? "text-yellow-400 hover:text-red-500 font-semibold"
            : "text-blue-500 hover:text-red-500 font-semibold"
        }
        href="/about"
      >
        About
      </Link>
      <Link
        className={
          pathname === "/blogs"
            ? "text-pink-700 hover:text-red-500 font-semibold"
            : "text-blue-500 hover:text-red-500 font-semibold"
        }
        href="/blogs"
      >
        Blogs
      </Link>
      <Link
        className={
          pathname === "/dashboard"
            ? "text-pink-700 hover:text-red-500 font-semibold"
            : "text-blue-500 hover:text-red-500 font-semibold"
        }
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={
          pathname === "/users"
            ? "text-yellow-400 hover:text-red-500 font-semibold"
            : "text-blue-500 hover:text-red-500 font-semibold"
        }
        href="/users"
      >
        Users
      </Link>
      <Link
        className="text-blue-500 hover:text-red-500 font-semibold"
        href="/contact"
      >
        Contact
      </Link>
      <Link
        className="text-blue-500 hover:text-red-500 font-semibold"
        href="/docs"
      >
        Document
      </Link>
      <Link
        className="text-blue-500 hover:text-red-500 font-semibold"
        href="/showcase"
      >
        Showcase
      </Link>
      <Link
        className="text-blue-500 hover:text-red-500 font-semibold"
        href="/about/designers"
      >
        Designers
      </Link>
      <Link
        className="text-blue-500 hover:text-red-500 font-semibold"
        href="/about/developers"
      >
        Developers
      </Link>
    </>
  );

  return <nav className="flex gap-6 p-4 bg-gray-200">{links}</nav>;
};

export default Navbar;
