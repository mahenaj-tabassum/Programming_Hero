## 1. What is children in React?

In React JS, `children` is a special, built-in props that allows us to pass components, HTML elements, strings, or functions between the opening and closing tags of a component

The type of children is

```
{children : React.ReactNode}
```

---

## Why `<Link href=""></Link>`?

```
<a href="/about">About</a>
```

It reloads the whole web page. Moreover it works slower

```
<Link href="/about">About</Link>
```

It doesn't reload the whole page. It works fast. Helps client side navigation, smooth transition

---

## Active Link Highlight

- বাস্তব website-এ সাধারণত current page highlight করা হয়।

- Next.js-এ usePathname() ব্যবহার করা হয়।

```
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 p-4 bg-slate-800 text-white">
      <Link
        href="/"
        className={pathname === "/" ? "text-yellow-400" : ""}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" ? "text-yellow-400" : ""}
      >
        About
      </Link>

      <Link
        href="/contact"
        className={pathname === "/contact" ? "text-yellow-400" : ""}
      >
        Contact
      </Link>
    </nav>
  );
}
```

`usePathname()`is a _Client Hook_. If we use _Client Hook_ we have to write **"use client"** above the all code

---

### মনে রাখার Shortcut 📝

- layout.tsx → পুরো app-এর common wrapper।
- children → বর্তমান page-এর content।
- Navbar → components/-এ রাখো।
- Link href="/about" → page change।
- usePathname() → active link highlight।
- Client Hook ব্যবহার করলে "use client" লাগবে।

## What is App router?

App router is a file system based router that uses React's latest features such as `Server Components`, `Suspense` and `Server Functions`

In react, generally we have to wrap whole app using App.jsx, but in Next.js every route can have own layout. It is called nested layouts

<!-- Lessons -->

- How to create a Next.js project
- Route
- Layout
- Dynamic Route
- Data Load
- img optimization
