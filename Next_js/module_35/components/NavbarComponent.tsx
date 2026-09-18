"use client";
import useUserHook from "@/hooks/useUserHook";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/posts" },
  { name: "Products", href: "/products" },
  { name: "Books", href: "/books" },
];

const NavbarComponent = () => {
  const user = useUserHook();

  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-gray-900">
          MyLogo
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                ${pathname === item.href ? "text-blue-600" : "text-gray-700 "}
                transition-colors hover:text-blue-600`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="text-slate-900 border border-red-600 px-5 py-2 rounded-2xl">
          {user}
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
