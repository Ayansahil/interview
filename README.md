Q1️⃣ What is a Reusable Component in React?

A reusable component is a modular piece of UI that can be used multiple times in an application by passing different data through props.

Key Points:

Accepts dynamic data using props

Reduces code duplication

Follows DRY principle (Don't Repeat Yourself)

Improves maintainability and scalability

Example:

<User name="Ayan" age={23} email="ayan@gmail.com" />

Q2️⃣ Real DOM vs Virtual DOM
🔹 Real DOM

Actual DOM in the browser

Direct manipulation is slow

Re-renders full DOM tree when changes occur

🔹 Virtual DOM

Lightweight copy of Real DOM

Stored in memory

React compares old and new Virtual DOM (Diffing)

Updates only changed nodes in Real DOM

Improves performance

Important Terms:

Diffing → Comparing old and new Virtual DOM

Reconciliation → Updating Real DOM efficiently

Q3️⃣ Component Lifecycle in React

Component Lifecycle refers to the different phases a component goes through from creation to removal.

1️⃣ Mounting

Component is created and inserted into the DOM.

useEffect(() => {
  console.log("Mounted");
}, []);

2️⃣ Updating

Occurs when state or props change.

useEffect(() => {
  console.log("Updated");
}, [dependency]);

3️⃣ Unmounting

Component is removed from the DOM.

useEffect(() => {
  return () => {
    console.log("Unmounted");
  };
}, []);