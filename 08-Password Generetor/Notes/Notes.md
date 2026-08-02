# 📁 08 - Password Generator Project

## 📌 Objective

Build a Password Generator using React Hooks and Tailwind CSS.

---

# ⚛️ useState

`useState` stores dynamic values inside a component.

Used for:

- Password Length
- Password
- Number Toggle
- Character Toggle

Example:

```jsx
const [password, setPassword] = useState("");
```

---

# ⚡ useCallback

`useCallback` memoizes a function.

It prevents unnecessary function recreation during re-renders.

Syntax:

```jsx
const myFunction = useCallback(() => {

}, []);
```

Used for:

- Password Generator
- Copy to Clipboard

---

# 🔄 useEffect

`useEffect` runs side effects whenever dependencies change.

Syntax:

```jsx
useEffect(() => {

}, []);
```

Used to automatically generate a new password whenever:

- Length changes
- Numbers toggle changes
- Characters toggle changes

---

# 📌 useRef

`useRef` creates a reference to a DOM element.

Example:

```jsx
const passwordRef = useRef(null);
```

Used for:

- Selecting the password
- Copying password to clipboard

---

# 📋 Password Generation Logic

1. Create a string containing alphabets.
2. Add numbers if enabled.
3. Add special characters if enabled.
4. Generate random characters using a loop.
5. Store the generated password in state.

---

# 📋 Copy to Clipboard

```jsx
passwordRef.current?.select();

window.navigator.clipboard.writeText(password);
```

---

# 🎨 Tailwind CSS

Used utility classes for:

- Layout
- Shadows
- Rounded corners
- Colors
- Responsive UI

---

# ✅ Key Takeaways

- useState stores dynamic data.
- useEffect runs side effects.
- useCallback memoizes functions.
- useRef accesses DOM elements.
- State changes automatically update the UI.