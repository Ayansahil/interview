# 🚀 React Interview Notes  

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Frontend](https://img.shields.io/badge/Frontend-Interview%20Prep-green)
![Performance](https://img.shields.io/badge/Performance-Optimized-orange)

---

# React Interview Preparation Guide 🚀

A comprehensive collection of React concepts and best practices for frontend interviews.

## 📚 Table of Contents
- [Reusable Component](#reusable-component)
- [Real DOM vs Virtual DOM](#real-dom-vs-virtual-dom)
- [Component Lifecycle](#component-lifecycle)
- [useState vs useEffect](#usestate-vs-useeffect)
- [Context API & useContext](#context-api--usecontext)
- [Redux State Management](#redux-state-management)
- [Code Splitting & Lazy Loading](#code-splitting--lazy-loading)
- [Bundle Optimization](#bundle-optimization)
- [Web Vitals & Performance Metrics](#web-vitals--performance-metrics)
- [Interview Summary](#interview-summary)

---

## 📌 Q1️⃣ What is a Reusable Component in React?

A reusable component is a modular piece of UI that can be used multiple times by passing different data through props.

### ✅ Key Points:
- Accepts dynamic data using props
- Reduces code duplication
- Follows DRY principle
- Improves scalability & maintainability

---

## 📌 Q2️⃣ Real DOM vs Virtual DOM

### 🔹 Real DOM
- Actual DOM in browser
- Direct manipulation is slow
- Re-renders full DOM tree

### 🔹 Virtual DOM
- Lightweight copy of Real DOM
- Stored in memory
- Uses Diffing & Reconciliation
- Updates only changed nodes

💎 *Improves performance by minimizing real DOM operations.*

---

## 📌 Q3️⃣ Component Lifecycle in React

Lifecycle refers to phases a component goes through:

### 🔹 Mounting
Component is inserted into DOM.

```js
useEffect(() => {
  console.log("Mounted");
}, []);
```


## Component Lifecycle

### 🔹 Updating
Occurs when state or props change.

```js
useEffect(() => {
  console.log("Updated");
}, [dependency]);
```

### 🔹 Unmounting
Component removed from DOM.

```js
useEffect(() => {
  return () => {
    console.log("Unmounted");
  };
}, []);
```

---

## useState vs useEffect

| **useState** | **useEffect** |
|--------------|---------------|
| Manages state | Handles side effects |
| Causes re-render | Runs after render |
| Stores data | Performs operations |

**💡 Pro Tip:** `useState` stores state, `useEffect` handles side effects.

---

## Context API & useContext

### 🔹 Context API
Allows sharing global data without prop drilling.

### 🔹 useContext
Hook used to consume context inside functional components.

### ✅ Common Use Cases:
- Theme management
- Authentication
- User data
- Language settings

---

## Redux State Management

Redux is a predictable state management library.

### 🔹 Core Concepts:
- **Store** → Central state
- **Action** → Describes change
- **Reducer** → Updates state
- **Dispatch** → Sends action

### 🔁 Data Flow:
```
UI → Action → Reducer → Store → UI
```

**💡 Pro Tip:** Redux follows a single source of truth and unidirectional data flow.

---

## Code Splitting & Lazy Loading

### 🔹 Code Splitting
Breaks bundle into smaller chunks for improved performance.

### 🔹 Lazy Loading
Loads components only when required.

```js
const About = React.lazy(() => import("./About"));
```

Wrapped inside Suspense:
```jsx
<Suspense fallback={<h2>Loading...</h2>}>
  <About />
</Suspense>
```

---

## Bundle Optimization

### Techniques:
- Code splitting
- Tree shaking
- Minification
- Image optimization
- Production build (`npm run build`)

**🎯 Goal:** Reduce bundle size & improve load time.

---

## Web Vitals & Performance Metrics

### 🔹 Core Web Vitals:
- **LCP** (Largest Contentful Paint) → Loading speed
- **FID** (First Input Delay) → Interactivity
- **CLS** (Cumulative Layout Shift) → Visual stability

### 🔹 Other Metrics:
- FCP (First Contentful Paint)
- TTFB (Time to First Byte)
- INP (Interaction to Next Paint)

**💡 Pro Tip:** Web Vitals measure real user experience and performance quality.

---

## Interview Summary

### 🧠 Key Topics to Master:
✔ Reusable Components  
✔ Virtual DOM  
✔ Lifecycle Methods  
✔ Hooks  
✔ Context API  
✔ Redux  
✔ Performance Optimization  

### 🔥 Current Status:
- 📚 Practicing Daily
- 💻 Building Projects
- 🚀 Preparing for Frontend Interviews

---

## 📝 Notes

This guide is actively maintained and updated with new concepts. Feel free to contribute or suggest improvements!

## 📄 License

MIT License - Feel free to use this for your interview preparation.