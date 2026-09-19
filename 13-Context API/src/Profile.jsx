import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Profile() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <h2 className="text-2xl mb-4">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h2>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Profile;