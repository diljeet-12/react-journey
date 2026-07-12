# 03 - React Flow, Structure & JSX Fundamentals

## The Golden Rule

JavaScript can only run in the browser if it is connected to an HTML file.

Usually this happens through:

```html
<script src="script.js"></script>
```

Without JavaScript,

the browser cannot execute your code.

---

# How Create React App Works

Inside:

public/index.html

React creates:

```html
<div id="root"></div>
```

Notice:

There is NO script tag.

The instructor explains that

react-scripts automatically injects the compiled JavaScript.

Execution Flow

index.html

↓

div#root

↓

ReactDOM.createRoot()

↓

<App />

↓

Browser UI

---

# How Vite Works

Vite is more transparent.

Inside index.html

```html
<script type="module" src="/src/main.jsx"></script>
```

There is no hidden magic.

Execution Flow

index.html

↓

main.jsx

↓

<App />

↓

Browser UI

---

# ReactDOM

React first selects

```javascript
document.getElementById("root")
```

Then creates a React Root.

```javascript
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
```

Finally

```javascript
root.render(<App />);
```

React injects the application inside

```html
<div id="root"></div>
```

---

# Virtual DOM

Browser

↓

Creates Real DOM

↓

React creates a Virtual DOM

↓

User changes data

↓

React compares old Virtual DOM

with new Virtual DOM

↓

Only changed elements update

This makes React fast.

---

# Single Page Application (SPA)

React applications have only one HTML page.

Instead of opening a new page,

React changes Components.

Example

Home

↓

About

↓

Contact

The browser appears to navigate,

but React simply replaces components inside the root div.

---

# React Components

A React Component is simply a JavaScript function.

Example

```jsx
function Header() {
    return <h1>Welcome</h1>;
}

export default Header;
```

Components are:

- Reusable
- Independent
- Easy to manage

---

# Rules for Components

## Rule 1

Component names must begin with a Capital Letter.

✔

```jsx
function Header() {}
```

❌

```jsx
function header() {}
```

---

## Rule 2

If a file contains JSX,

Vite requires

```
.jsx
```

extension.

Example

✔

```
Header.jsx
```

❌

```
Header.js
```

---

## Rule 3

A component must return only one parent element.

❌

```jsx
return(
<h1>Hello</h1>
<p>React</p>
)
```

✔

```jsx
return(
<div>
<h1>Hello</h1>
<p>React</p>
</div>
)
```

or

```jsx
return(
<>
<h1>Hello</h1>
<p>React</p>
</>
)
```

Fragments avoid unnecessary divs.

---

# JSX

JSX stands for

JavaScript XML.

It allows us to write HTML-like syntax inside JavaScript.

Example

```jsx
const element = <h1>Hello React</h1>;
```

React converts JSX into JavaScript before rendering.

As beginners,

we only need to know HOW to write JSX.

Understanding how React converts JSX internally can come later.

---

# Difference Between CRA and Vite

| Create React App | Vite |
|------------------|------|
| Slow | Fast |
| Uses react-scripts | Uses ES Modules |
| index.html inside public | index.html in project root |
| Hidden script injection | Explicit script tag |
| Older approach | Modern approach |

---

# Key Takeaways

✔ React renders everything inside div#root.

✔ main.jsx is the entry point.

✔ App.jsx is the main component.

✔ React uses Components to build UI.

✔ JSX looks like HTML but is actually JavaScript.

✔ Every component returns one parent element.