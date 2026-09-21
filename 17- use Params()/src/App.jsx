import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;