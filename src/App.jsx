import React, { useState } from "react";
import "./App.scss";
import openEye from "./open-eye.svg";
import closedEye from "./closed-eye.svg";

function App() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const passwordHasLowercaseLetter = /[a-z]/.test(password);
  const passwordHasUppercaseLetter = /[A-Z]/.test(password);
  const passwordHasSpecialCharacter =
    /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);
  const passwordHasValidLength = password.length >= 8;

  return (
    <>
      <h1>Password Validator</h1>

      <input
        type={passwordIsVisible ? "text" : "password"}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <span onClick={() => setPasswordIsVisible((prevState) => !prevState)}>
        <img
          src={passwordIsVisible ? closedEye : openEye}
          alt={passwordIsVisible ? "Closed Eye" : "Open Eye"}
          width="32"
        />
      </span>
      <ul>
        <li style={{ color: passwordHasLowercaseLetter ? "green" : "red" }}>
          One lowercase letter
        </li>
        <li style={{ color: passwordHasUppercaseLetter ? "green" : "red" }}>
          One uppercase letter
        </li>
        <li style={{ color: passwordHasSpecialCharacter ? "green" : "red" }}>
          One special letter
        </li>
        <li style={{ color: passwordHasNumber ? "green" : "red" }}>
          one number
        </li>
        <li style={{ color: passwordHasValidLength ? "green" : "red" }}>
          Minimum 8 characters
        </li>
      </ul>
    </>
  );
}

export default App;
