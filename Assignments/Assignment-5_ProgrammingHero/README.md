# 🚀 DevStack

DevStack is a modern React application that helps users explore different web development technologies and build their own personalized developer stack

## 🌐 Live Demo

> www.dev-stack.com

## 🛠️ Technologies Used

- ⚛️ React
- 🔷 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔔 React Toastify

## ✨ Features

- ➕ Add new technology stacks.

- 🗑️ Delete existing stacks.

- 📡 Fetch technology data from a local API.

- 🎨 Clean and responsive user interface.

---

## 📝 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code in JavaScript.
It is used in React because it makes components easier to read, write and maintain

### 2. What is the difference between props and state?

Both props and state store data, but they work differently.

Props:

- They come from the parent component.
- They are read-only.
- A child component cannot change them.

State:

- It is component's own data.
- It is changeable.
- It is updated using setState (or the state setter function from useState).

### 3. What does the useState hook do, and where did you use it in this project?

`useState` is a React Hook that stores data inside a component and when the state changes, it re-renders the UI.

I used `useState` several times in this project to store:

- Selected technology stack.
- The "Add to Stack" button state.
- The selected stack state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook that runs side-effects after a component renders.
It is used to load local JSON data when the component first loaded, so the data could be fetched and displayed on the page.

### 5. Why does every item in a .map() list need a unique key prop?

Every item in `.map()` list needs unique `key` prop so React can identify each item.
This helps React update, add, or remove items efficiently without re-rendering the entire list.

### 6.What is conditional rendering? Show one place you used it (example: the empty stack message).

Showing different UI based on condition is called conditional rendering.
I used conditional rendering for the "Add to Stack button to show different button states based on condition.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

#### Parent -> Child

We can pass the from parent component to child component using props.

#### Child -> Parent

A child can't directly change the parent's state.Instead, the parent passes a function to the child through props. The child can call that function to send data back to the parent.

---

## 👨‍💻 Author

**Mahenaj Tabassum**

GitHub: [@mahenaj-tabassum](https://github.com/mahenaj-tabassum)

---

⭐ If you like this project, consider giving it a star on GitHub!
