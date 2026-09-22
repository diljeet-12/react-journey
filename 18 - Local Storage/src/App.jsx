import React, { useEffect, useState } from "react";

function App() {
  // Stores the name entered by the user
  const [name, setName] = useState("");

  // Stores the age entered by the user
  const [age, setAge] = useState("");

  // Stores the saved user object
  // Initially there is no saved user, so we use null
  const [savedUser, setSavedUser] = useState(null);

  // ==================================================
  // LOAD USER WHEN THE PAGE IS REFRESHED
  // ==================================================

  useEffect(() => {
    // Get the "user" data from localStorage
    // localStorage returns the data as a STRING
    const storedUser = localStorage.getItem("user");

    // Check if a user was actually saved
    if (storedUser) {
      // Convert the string back into a JavaScript object
      // JSON.parse(): String -> Object
      const user = JSON.parse(storedUser);

      // Put the object into savedUser state
      // This makes the saved user appear on the screen
      setSavedUser(user);
    }
  }, []);

  // ==================================================
  // SAVE USER
  // ==================================================

  const saveUser = () => {
    // Create a user object using the name and age
    const user = {
      name: name,
      age: age,
    };

    // localStorage can only store strings
    // JSON.stringify(): Object -> String
    localStorage.setItem("user", JSON.stringify(user));

    // Also save the user in React state
    // This makes the user appear immediately
    // without refreshing the page
    setSavedUser(user);
  };

  return (
    <div>
      <h1>User Profile</h1>

      {/* ================= NAME INPUT ================= */}

      <div>
        <label>Name: </label>

        <input
          type="text"
          value={name}
          // Update the name state whenever the user types
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <br />

      {/* ================= AGE INPUT ================= */}

      <div>
        <label>Age: </label>

        <input
          type="number"
          value={age}
          // Update the age state whenever the user types
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
      </div>

      <br />

      {/* ================= SAVE BUTTON ================= */}

      <button onClick={saveUser}>
        Save User
      </button>

      <hr />

      {/* ==================================================
          Only display the user if savedUser is not null
          ================================================== */}

      {savedUser && (
        <div>
          <h2>Name: {savedUser.name}</h2>
          <h2>Age: {savedUser.age}</h2>
        </div>
      )}
    </div>
  );
}

export default App;