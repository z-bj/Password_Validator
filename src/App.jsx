import React, { useState } from "react";
import "./App.scss";
import openEye from "./open-eye.svg";
import closedEye from "./closed-eye.svg";

function App() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <>
      <h1>Password Validator</h1>

      <input
        type={passwordIsVisible ? "text" : "password"}
        placeholder="Enter your password"
      />
      <span onClick={() => setPasswordIsVisible((prevState) => !prevState)}>
        <img
          src={passwordIsVisible ? closedEye : openEye}
          alt={passwordIsVisible ? "Closed Eye" : "Open Eye"}
          width="32"
        />
      </span>
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
