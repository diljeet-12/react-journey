# 📁 08 - React Router Crash Course

## 📌 Objective

Learn how to build a multi-page React application using React Router without refreshing the browser.

---

# 🌐 What is React Router?

React Router is a library that enables navigation between different pages (components) in a React application.

Instead of loading a new HTML page every time, React Router changes only the required component, making the application faster.

Install:

```bash
npm install react-router-dom
```

---

# 🏗 Project Structure

```

src
│
├── components
│   ├── Header
│   ├── Footer
│   ├── Home
│   ├── About
│   ├── Contact
│   ├── Github
│   └── User
│
├── Layout.jsx
├── App.jsx
├── main.jsx
└── index.css

```

---

# 🚀 Website Flow

```

Browser Opens

↓

main.jsx

↓

RouterProvider

↓

createBrowserRouter

↓

Layout Component

↓

Header

↓

Outlet

↓

Current Page
(Home/About/Contact/User/Github)

↓

Footer

```

The Header and Footer remain the same.
Only the component inside `<Outlet />` changes.

---

# 🧠 Main Concepts Used

## 1. createBrowserRouter()

Creates all routes of the application.

Example:

```jsx
const router = createBrowserRouter([
{
path: "/",
element: <Layout />,
children: [
{
path: "",
element: <Home />
},
{
path: "about",
element: <About />
}
]
}
])
```

---

## 2. RouterProvider

Provides routing to the entire React application.

```jsx
<RouterProvider router={router} />
```

Without it, routing will not work.

---

## 3. Layout Component

Layout is the parent component.

It contains:

- Header
- Outlet
- Footer

```jsx
<>
<Header />
<Outlet />
<Footer />
</>
```

---

## 4. Outlet

`<Outlet />` is a placeholder.

React Router renders the current page inside it.

Example:

```

Header

↓

Outlet

↓

Footer

```

If URL is:

```

/about

```

React renders:

```

Header

↓

About

↓

Footer

```

---

## 5. Link

Used for navigation.

```jsx
<Link to="/about">About</Link>
```

Unlike HTML `<a>` tags, Link does not refresh the page.

---

## 6. NavLink

Works like Link but knows the active page.

Example:

```jsx
<NavLink
to="/about"
className={({ isActive }) =>
isActive
? "text-orange-700"
: "text-gray-700"
}
>
About
</NavLink>
```

Used for active navigation styling.

---

## 7. Dynamic Routes

Dynamic routes accept URL parameters.

Example:

```jsx
path: "user/:userid"
```

URL:

```

/user/diljeet

```

Here,

```

userid = "diljeet"

```

---

## 8. useParams()

Reads dynamic parameters from the URL.

Example:

```jsx
const { userid } = useParams()
```

Output:

```

User: diljeet

```

---

## 9. Fetch API with useEffect

Github page fetches user data.

```jsx
useEffect(() => {
fetch(API)
.then(res => res.json())
.then(data => setData(data))
}, [])
```

After data is received, React re-renders the component.

---

# 🛠 React Router Logic

```

User clicks About

↓

URL changes

↓

React Router checks routes

↓

Route matched

↓

Layout remains same

↓

Outlet updates

↓

About Component renders

```

No page refresh occurs.

---

# 📂 How the Project Works

```

Application Starts

↓

main.jsx executes

↓

RouterProvider loads router

↓

Layout Component renders

↓

Header renders

↓

Outlet waits for matching route

↓

React checks current URL

↓

Matching component renders

↓

Footer renders

```

---

# 🔥 Components Used

- Header
- Footer
- Home
- About
- Contact
- Github
- User
- Layout

---

# 🪝 Hooks Used

### useState

Stores API response.

```jsx
const [data, setData] = useState([])
```

---

### useEffect

Fetches GitHub data after component mounts.

```jsx
useEffect(() => {

}, [])
```

---

### useParams

Reads dynamic route parameters.

```jsx
const { userid } = useParams()
```

---

# 📌 Important React Router Components

| Component | Purpose |
|-----------|---------|
| createBrowserRouter | Creates routes |
| RouterProvider | Enables routing |
| Outlet | Displays current page |
| Link | Navigate without refresh |
| NavLink | Active navigation |
| useParams | Read URL parameters |

---

# ⚡ Key Takeaways

- React Router enables navigation without page reload.
- `RouterProvider` provides routing.
- `createBrowserRouter()` defines routes.
- `Layout` keeps common UI (Header & Footer).
- `Outlet` renders child routes.
- `Link` is used instead of `<a>`.
- `NavLink` helps style active links.
- `useParams` reads dynamic URL values.
- `useEffect` fetches GitHub API data.
- React only updates the page component inside `Outlet`.

---

# 📖 Summary

In this project, we built a multi-page React application using React Router. We learned how to create routes with `createBrowserRouter`, provide routing using `RouterProvider`, and use `Layout` with `Outlet` to keep common components like Header and Footer while changing only the page content. We also used `Link` and `NavLink` for navigation, `useParams` for dynamic URLs, and `useEffect` with the Fetch API to display GitHub user information. This project introduced the foundation of routing in React applications and demonstrated how Single Page Applications (SPAs) work without reloading the browser.