// Import the useState Hook from React.
// Hooks are special functions that let React components use features like state.
import { useState } from "react";

// Import the CSS file for styling this component.
import "./App.css";

// Every React component is a JavaScript function.
function App() {
  // -----------------------------
  // useState Hook
  // -----------------------------
  // counter     -> Current state value
  // setCounter  -> Function used to update the state
  // 0           -> Initial value of the counter
  const [counter, setCounter] = useState(0);

  // -----------------------------
  // Increase Counter
  // -----------------------------
  const addValue = () => {
    // Functional Update
    // 'prev' represents the previous state value.
    // React recommends this approach when the new value depends on the previous value.
    setCounter((prev) => prev + 1);
  };

  // -----------------------------
  // Decrease Counter
  // -----------------------------
  const removeValue = () => {
    // Prevent the counter from going below 0.
    if (counter > 0) {
      // Decrease the previous value by 1.
      setCounter((prev) => prev - 1);
    }
  };

  /*
  -------------------------------------------------
  Alternative Way (Using Ternary Operator)
  -------------------------------------------------

  const removeValue = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  Explanation:
  - If previous value is greater than 0
      → subtract 1
  - Otherwise
      → keep the value at 0

  This is shorter but may be harder to read for beginners.
  */

  // -----------------------------
  // Reset Counter
  // -----------------------------
  const resetValue = () => {
    // Directly set the counter back to its initial value.
    setCounter(0);
  };

  // JSX (JavaScript XML)
  // JSX looks like HTML but is actually JavaScript.
  return (
    <div className="container">
      {/* Main Heading */}
      <h1>Counter App by diljeet</h1>

      {/* Display the current counter value */}
      <h2>Counter Value: {counter}</h2>

      <div className="buttons">
        {/* Increase Button */}
        <button onClick={addValue}>
          Add Value
        </button>

        {/* Decrease Button */}
        <button onClick={removeValue}>
          Remove Value
        </button>

        {/* Reset Button */}
        <button onClick={resetValue}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Export this component so it can be used in main.jsx.
export default App;