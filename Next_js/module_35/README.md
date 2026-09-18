# 📚 Next.js Learning Notes

---

## 🔹 Async Function & Promise

* `async` function always return a `Promise`, even if you *return* an array. 🔑

* *await* unwraps the promise and gives you the real array.

```ts
const PostsPromise = async () => {
  const posts: PostObject[] = await response.json();

  return posts;
};
```

It actually returns:

```ts
Promise<PostObject[]> // It is not an array
```

---

# 🔹 Data Caching

### Data Caching = Saving previously fetched data so that it can be reused instead of fetching it again

---

# 1. What is Data Caching?

**Data Caching** is the process of storing a copy of frequently used data in a temporary storage area (called a cache) so it can be accessed much faster the next time it's needed.

There are several types of caching:

* **Browser Cache:** Stores: Img, CSS, JS
* **Memory Cache:** Stores: Data in RAM
* **Server Cache:** Stores: API responses
* **Next.js Data Cache:** Stores: Fetch responses
* **Database Cache:** Stores: Query results

---

# 2. What is ISR?

ISR, or Incremental Static Regeneration, is a Next.js rendering technique that allows us to generate static page and update them periodically without rebuilding the entire application. It combines the performance benefits of static generation with the ability to server update using revalidation.

## 📌 Where would you use ISR?

ISR is useful for pages where:

* Data changes occasionally, not every second.
* You want fast page loads.
* You don't want to rebuild the entire application whenever - data changes.

### Examples:

* 🛒 Product pages
* 📰 Blog posts
* 📚 Book/catalog pages
* 🏨 Hotel listings
* 🏠 Property listings

---

# 3. What is `generateStaticParams` in Next.js?

*generateStaticParams* is a Next.js function used with dynamic routes to specify the parameter values that should be statically generated at build time. It helps optimize dynamic pages by pre-rendering known routes, which can improve performance and reduce the work reuired when users request those pages.

---

# 4. Explore Context API

The *Context API* allows us to share data between components without passing props manually through every level of the component tree.

### Key Concepts

* `createContext()`
* Context Provider
* `useContext()`
* Sharing global state
* Avoiding prop drilling
* Consuming context in child components

---

# 5. Explore Custom Hook

A Custom Hook is a reusable JavaScript/TypeScript function that uses React Hooks to encapsulate and share logic between components.

### Key Concepts

* Creating custom hooks
* Naming conventions (`useSomething`)
* Reusing stateful logic
* Encapsulating `useState`, `useEffect`, `useContext`, etc.
* Creating a custom hook for Context API
