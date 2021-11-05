import React, { useState } from "react";
import PasswordValidator from "./utils/PassWordValidator";
import "./App.scss";
import openEye from "./open-eye.svg";
import closedEye from "./closed-eye.svg";

function App() {
  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const passwordValidator = new PasswordValidator(password);

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
        <li
          style={{
            color: passwordValidator.hasLowerCaseLetter() ? "green" : "red",
          }}
        >
          One lowercase letter
        </li>
        <li
          style={{
            color: passwordValidator.hasUpperCaseLetter() ? "green" : "red",
          }}
        >
          One uppercase letter
        </li>
        <li
          style={{
            color: passwordValidator.hasSpecialCharacter() ? "green" : "red",
          }}
        >
          One special letter
        </li>
        <li style={{ color: passwordValidator.hasDigit() ? "green" : "red" }}>
          one number
        </li>
        <li
          style={{
            color: passwordValidator.hasValidLength() ? "green" : "red",
          }}
        >
          Minimum 8 characters
        </li>
      </ul>
    </>
  );
}

export default App;
