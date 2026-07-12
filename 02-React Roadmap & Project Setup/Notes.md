# 02 - React Roadmap & Project SetupN
### The Importance of Engagement

The instructor begins by welcoming viewers to the "Chai aur React" series.

He emphasizes that producing high-quality free content requires motivation from the community.

He encourages learners to:

- Comment on videos
- Share their learning
- Stay engaged
- Post their progress on LinkedIn

---

# Why Learn React?

React should NOT be learned simply because:

- It has a high salary.
- Everyone is using it.
- It is trending.

Instead, React is useful when building complex frontend applications.

### Example

Imagine an E-commerce Website.

Clicking **Add to Cart** updates:

- Cart Count
- Total Price
- Product Quantity
- Checkout Page

Managing this with plain JavaScript becomes difficult.

React makes these UI updates much easier.

---

# Prerequisites

Before learning React, you should have a strong understanding of JavaScript.

Topics you should know:

- Variables
- Functions
- Arrays
- Objects
- ES6
- Promises
- Async/Await
- DOM Manipulation
- Fetch API
- Event Handling

The instructor explains:

> You should be able to build the application in JavaScript first.

Then React becomes a tool that makes development easier.

---

# Why React Was Created

React was created at Facebook.

### The Problem

Facebook users sometimes saw:

🔔 5 Notifications

After opening all notifications...

The notification count still showed:

🔔 5

The application's data changed,

but the UI did not update correctly.

This happened because:

State

≠

DOM

They were out of sync.

React solved this synchronization problem.

---

# Framework vs Library

The instructor uses a military analogy.

## Framework

Examples:

- Next.js
- Django
- Angular

A framework has strict rules.

Example:

- Folder structure
- File names
- Project architecture

You must follow its rules.

---

## Library

React is a Library.

A library gives freedom.

You decide:

- Folder structure
- Components
- Architecture

React only helps build the User Interface.

---

# React Ecosystem

React mainly focuses on:

- UI
- State Management

Other libraries are added when required.

Examples:

- React Router
- Redux Toolkit
- Zustand
- Firebase
- Appwrite

---

# Project Setup

## Method 1 - Create React App (CRA)

Command

```bash
npx create-react-app my-app
```

Pros

- Beginner friendly

Cons

- Slow
- Large project size
- Installs unnecessary packages

Run project

```bash
npm start
```

---

## Method 2 - Vite

Command

```bash
npm create vite@latest
```

Then

```bash
npm install
```

Run project

```bash
npm run dev
```

Advantages

- Very Fast
- Lightweight
- Modern
- Better Developer Experience

The instructor recommends using Vite.

---

# Cleaning the Boilerplate

The instructor removes unnecessary files like:

- App.css
- index.css
- logo.svg
- setupTests.js

Then creates a simple App component.

Example

```jsx
function App() {
    return <h1>Hello React</h1>;
}

export default App;
```

---

# Key Takeaways

✔ Learn JavaScript before React.

✔ React solves complex UI problems.

✔ React is a Library.

✔ Vite is the recommended project setup.

✔ React focuses on building User Interfaces.