import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav>
      <h2>
        Current theme: {darkMode ? "Dark" : "Light"}
      </h2>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;