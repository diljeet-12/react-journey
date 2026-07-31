# 📁 07 - Background Changer Project

## 📌 Objective

Build a simple React application that changes the background color using **useState**, event handling, and Tailwind CSS.

---

# 🎯 Project Goal

- Change the background color dynamically.
- Learn how state updates the UI.
- Practice event handling in React.

---

# ⚛️ useState

`useState` stores values that can change during the application's lifecycle.

```jsx
const [color, setColor] = useState("olive");
```

- `color` → current state.
- `setColor()` → updates the state.

---

# 🎨 Dynamic Styling

React allows dynamic styles using inline styling.

```jsx
style={{ backgroundColor: color }}
```

Whenever `color` changes, the background updates automatically.

---

# 🖱 Event Handling

Use `onClick` to trigger state updates.

```jsx
<button onClick={() => setColor("red")}>
    Red
</button>
```

---

# ❌ Incorrect

```jsx
onClick={setColor("red")}
```

This executes immediately during rendering.

---

# ✅ Correct

```jsx
onClick={() => setColor("red")}
```

The function executes only when the button is clicked.

---

# 🎨 Tailwind CSS

Used utility classes to create responsive UI.

Examples:

- `w-full`
- `h-screen`
- `rounded-3xl`
- `shadow-lg`
- `flex`
- `justify-center`
- `gap-3`

---

# ✅ Key Takeaways

- `useState` manages dynamic data.
- Updating state automatically updates the UI.
- Inline styles can use React state.
- `onClick` should receive a callback function.
- Tailwind CSS makes styling fast and reusable.