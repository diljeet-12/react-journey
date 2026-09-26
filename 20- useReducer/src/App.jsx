import { useReducer } from "react";

// Reducer decides how the state should change
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    // Keep the current state if the action is unknown
    default:
      return state;
  }
}

function App() {
  // count = current state
  // dispatch = sends an action to the reducer
  // 0 = initial state
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* Send "increment" action to the reducer */}
      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

      {/* Send "decrement" action to the reducer */}
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>

      {/* Send "reset" action to the reducer */}
      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default App;