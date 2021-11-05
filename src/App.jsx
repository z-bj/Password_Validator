import React, { useState } from "react";
import "./App.scss";

function App() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <>
      <h1>Password Validator</h1>

      <input
        type={passwordIsVisible ? "text" : "password"}
        placeholder="Enter your password"
      />
      <button onClick={() => setPasswordIsVisible((prevState) => !prevState)}>
        {passwordIsVisible ? "Hide" : "Show"}
      </button>
      <ul>
        <li>One lowercase letter</li>
        <li>One uppercase letter</li>
        <li>One special letter</li>
        <li>one number</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );
}

export default App;
