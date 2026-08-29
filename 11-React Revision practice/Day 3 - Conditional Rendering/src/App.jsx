
import React, { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = "Diljeet";

  return (
    <div>
      <h1>
        {isLoggedIn ? `Welcome ${username}` : "Please Login"}
      </h1>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default App