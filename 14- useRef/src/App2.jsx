import React, { useRef } from "react";

function Main() {
  const countRef = useRef(0);

  return (
    <div>
      <h1>Count: {countRef.current}</h1>

      <button onClick={() => {
        countRef.current = countRef.current + 1;
      }}>
        Increase
      </button>
    </div>
  );
}

export default Main;