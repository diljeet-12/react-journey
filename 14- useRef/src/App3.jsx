import React, { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("Diljeet");

  const previousName = useRef("");

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Current Name: {name}</h1>

      <h2>Previous Name: {previousName.current}</h2>

      <button onClick={() => setName("Alex")}>
        Change Name
      </button>
    </div>
  );
}
export default App;