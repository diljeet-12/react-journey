# 📁 05 - React Behind the Scenes (Virtual DOM, Reconciliation & Fiber)

## 📌 Objective

Learn how React updates the UI efficiently using the Virtual DOM, Reconciliation, and React Fiber.

---

# 🌐 Real DOM

- The Real DOM is the actual webpage displayed in the browser.
- Updating the Real DOM frequently is slow because the browser must recalculate and repaint the page.

**Example**

```javascript
document.querySelector("h1").innerText = "Counter: 1";
```

---

# ⚛️ Virtual DOM

- Virtual DOM is a lightweight JavaScript copy of the Real DOM.
- Whenever the state changes, React creates a new Virtual DOM.
- It compares the new Virtual DOM with the previous one.
- Only the changed elements are updated in the Real DOM.

**Example**

Before:

```text
Counter: 0
```

After:

```text
Counter: 1
```

React updates only the counter instead of the entire page.

---

# 🔄 Reconciliation

- Reconciliation is React's comparison process.
- It compares the old Virtual DOM with the new Virtual DOM.
- This process is called the **Diffing Algorithm**.
- Only the changed parts are updated.

---

# 🧵 React Fiber

- React Fiber is React's rendering engine.
- It schedules rendering work efficiently.
- It can:
  - Pause rendering.
  - Resume rendering.
  - Prioritize important updates.

This keeps React applications smooth and responsive.

---

# 🔑 Keys

- Keys uniquely identify list items.
- They help React detect added, removed, or updated elements.
- Keys improve rendering performance.

Example:

```jsx
<li key={user.id}>{user.name}</li>
```

---

# ⚡ React Rendering Flow

```text
State Changes
      ↓
New Virtual DOM
      ↓
Reconciliation
      ↓
Fiber Schedules Work
      ↓
Real DOM Updates
      ↓
Updated UI
```

---

# ✅ Key Takeaways

- React updates only the changed UI.
- Virtual DOM improves performance.
- Reconciliation compares Virtual DOM trees.
- Fiber schedules rendering work.
- Keys help React update lists efficiently.