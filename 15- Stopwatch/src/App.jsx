import React, { useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    // If timer is already running, don't create another one
    if (timerRef.current !== null) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center w-80">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Stopwatch
        </h1>

        <div className="text-5xl font-bold text-blue-600 mb-8">
          {seconds}s
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={startTimer}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg"
          >
            Start
          </button>

          <button
            onClick={stopTimer}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg"
          >
            Stop
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;