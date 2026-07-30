# 📁 06 - Tailwind CSS and Props

## 📌 Objective

Learn how to style React applications using Tailwind CSS and pass data between components using Props.

---

# 🎨 Tailwind CSS

- Tailwind CSS is a **utility-first CSS framework**.
- It provides ready-to-use utility classes.
- Styling is done directly in the `className` attribute.
- In React, always use `className` instead of `class`.

### Example

```jsx
<h1 className="bg-black text-white p-4 rounded-xl">
  Hello React
</h1>
```

### Tailwind v4 Setup

Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure Vite:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Import Tailwind in `index.css`:

```css
@import "tailwindcss";
```

---

# 🧩 Components

- Components are reusable UI blocks.
- They help organize code into smaller pieces.
- A component can be used multiple times.

Example:

```jsx
<Card />
<Card />
```

---

# 📦 Props

- Props (Properties) are used to pass data from a parent component to a child component.
- Props are **read-only**.
- Every component receives props as an object.

### Parent Component

```jsx
<Card username="Diljeet" />
```

### Child Component

```jsx
function Card(props) {
  return <h1>{props.username}</h1>;
}
```

---

# 📦 Passing Objects as Props

You can pass objects, arrays, numbers, and variables using `{}`.

```jsx
const user = {
  age: 20,
  city: "Amritsar",
};

<Card someObj={user} />
```

Access them:

```jsx
props.someObj.age
props.someObj.city
```

---

# ❓ Optional Chaining

Use optional chaining (`?.`) to avoid errors when a value doesn't exist.

```jsx
props.someObj?.age
```

Instead of:

```jsx
props.someObj.age
```

which can throw an error if `someObj` is `undefined`.

---

# 🔄 Default Values

Provide fallback values when props are missing.

```jsx
{props.username || "Nothing"}
```

Example:

```jsx
<Card />
```

Output:

```text
Nothing
```

---

# ✨ Props Destructuring

Instead of:

```jsx
function Card(props) {
  return <h1>{props.username}</h1>;
}
```

Use:

```jsx
function Card({ username }) {
  return <h1>{username}</h1>;
}
```

It makes the code cleaner and easier to read.

---

# ✅ Key Takeaways

- Tailwind CSS is a utility-first CSS framework.
- Use `className` in JSX.
- Components make UI reusable.
- Props pass data from parent to child.
- Props are read-only.
- Objects and arrays can be passed as props.
- Use optional chaining (`?.`) to prevent errors.
- Use default values for missing props.
- Props destructuring makes code cleaner.