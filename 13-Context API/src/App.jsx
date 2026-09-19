import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Profile from "./Profile";
import Navbar from "./Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={
          darkMode
            ? "bg-gray-900 text-white min-h-screen p-10"
            : "bg-white text-black min-h-screen p-10"
        }
      >
        <Navbar />

        <h1 className="text-3xl font-bold my-5">
          Theme App
        </h1>

        <Profile />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;