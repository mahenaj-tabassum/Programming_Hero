- `async` means it automatically returns a Promise.
- The **API** sends _JSON Text_, not a JavaScript object. `response.json()` converts that JSON into something our JavaScript can use.

### Two ways to get data

- `fetch()` — Ask another server

```
const res = await fetch("http://localhost:5000/books");
const books = await res.json();
```

- `import` — Read a local file

```
import booksData from "@/data/booksData.json";

const getBooks = async () => {
  return booksData;
};
```

## Context API

Solving Prop drilling

1. createContext()
   Create the shared group where the data will live.
   _Analogy: Making the whatsApp group_

2. Context.Provider
   Wrap the tree and share a value with everyone inside it.
   _Analogy: Posting a message in the group_

3. useContext(Context)
   Read the shared value from any nested component, no props needed.
   _Analogy: Opening the group to read it_

# What is `ReactNode`?

`ReactNode` is a Typescript type provided by React. It represents anything that React can render on the screen, including JSX elements, strings, numbers, fragments, null and false. We commonly use `ReactNode` to type the `children` prop because it allows any valid React Content to be passed into a component.

```
children: ReactNode
```

## scroll-padding-top

```
scroll-padding-top: calc(84px + env(safe-area-inset-top, 0px));
```

Adds a top offset when the page scrolls to an anchor or uses scrollIntoView(). It prevents content from being hidden behind a fixed/sticky navbar (84px) and includes extra space for devices with a notch using env(safe-area-inset-top).


- { passive: true } → promise that handleScroll won't call event.preventDefault().


Why is it useful?

The browser doesn't have to wait for your JavaScript before continuing to scroll, so scrolling stays smoother and can perform better, especially on mobile devices.