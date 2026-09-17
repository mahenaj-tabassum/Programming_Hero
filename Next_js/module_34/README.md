# What is Rendering?

Rendering is a process your browser uses to turn website code(HTML, CSS, JavaScript) into the visual page you can see and interact with.

Suppose you are visiting Programming_Hero website. Website(Html, Css, JavaScript) is on the server.

Browser will send request to the Programming_Hero server to get the webpage(HTML, CSS, JavaScript).
(Initially user will see a blank page, because HTML, CSS and JS is on the way. )

(User will still see a blank page)

- Browser will download the HTML and parse the node.
- Create DOM
- Downloading CSS and Creating CSS object model.
- Downloading and attaching JavaScript(Hydration)
- Create Render Tree with DOM and CSSOM

_Finally User Will See The Page_

---

# What is CSR (Client Side Rendering)?

If render happens on client it is called CSR. Happens in user's browser.

- Rendering Location: Browser
- Initial Page load speed: Slower first load
- Client resource usage: Higher CPU or memory usage in browser
- Time Interactive: slower
- SEO: Historically Weaker
- Typical frameworks/tools: React (SPA)
- Best suited for: Highly interactive app. Dashboards, SaaS tools

---

# What is SSR (Server Side Rendering)?

If render happens on server it is called SSR.

- Server will send HTML and some critical CSS. No Javascript.
- JavaScript will be downloaded later(if needed) and then applied to the DOM element.
- This process of attaching JavaScript to server-rendered HTML is known as Hydration.
- Rendering Location: Server
- Initial Page load speed: Faster first load
- Client resource usage: Lower client workload
- Time Interactive: Faster for content
- SEO: Better SEO. Because crawlers receive fully rendered HTML
- Typical frameworks/tools: Next.js
- Best suited for: Content-heavy sites. Blogs, e-commerce, marketing pages

---

# Rendering in Next JS

- CSR
- SSR
- SSG
- ISR = Incremental Static Regeneration
- PPR = Partial Pre-rendering

# Components in Next JS

There are primarily 2 core types of components:

- Client Components
  - Pre-render on teh Server and Hydration on the Browser(client)
  - Can use Hooks
  - You can't use server components inside client component
  - Need _use client_ keyword
  - Browser gets mostly empty HTML

```
"use client";

export default function Counter() {
  return <button>Click</button>;
}
```

- Server Components
  - Render completely on Server. No hydration.
  - You can't use Hooks
  - You can't use client side js (eventListener, window objects etc)
  - But you can include client component inside server components
  - _Next js components are Server Component by default._
    - Browser HTML whole HTML from server

```
export default function Page() {
  return <h1>Server Rendered</h1>;
}
```

# Interview Question

### 1. What is Rendering?

Rendering is the process of converting React components into HTML and displaying that HTML in the browser.

### 2. Where does get CSR rendered?

CSR (Client-Side Rendering) is rendered in the browser (client). The browser first receives minimal HTML, then downloads JavaScript, React runs, and finally the UI is rendered on the user's device. 🌐

Client-Side Rendering (CSR) is a rendering method where the browser receives minimal HTML first. Then JavaScript downloads, React executes, and the browser generates the UI.

#### How CSR works

- User requests a page.
- Server sends almost empty HTML.
- Browser downloads JavaScript.
- React renders the UI.
- The page becomes visible.

### 3. Where does get SSR rendered?

SSR (Server-Side Rendering) is rendered on the server. The server generates the HTML first and then sends the ready-made HTML to the browser, so users can see the content immediately.

### 4. Which one is better for SEO?

SSR is better for SEO because search engines receive fully rendered HTML when they crawl the page. This makes it easier for them to index the content compared to CSR, where much of the content appears only after JavaScript runs.

### 5. Which rendering process does React use by default?

React (such as a Vite React app) uses Client-Side Rendering (CSR) by default. The browser downloads JavaScript, React runs, and then the UI is rendered.

### 6. Why Next.js support SSR?

- Next.js supports SSR to provide several benefits:

- Better SEO by sending ready HTML to search engines.

- Faster initial page load for users.

- Improved performance for content-heavy websites like blogs, news sites, and e-commerce stores.

- Ability to generate dynamic content on every request when needed.

---

---

---

---

---

# What is Hydration?

Hydration is the process where React takes the HTML that was already rendered on the server and attaches the JavaScript functionality to it in the browser, making the page interactive.

# Why would you load data using a Client Component?

We use a `Client Component` when the data fetching depends on the browser-side interaction or a client side state. For example, when data needs to be fetched after a user action, when we need `useEffect`, or when the UI needs to update dynamically based on client-side state

Client Component → Browser → useEffect → Fetch → State → UI
