import React, { useState } from "react";
import PasswordValidator from "./utils/PassWordValidator";
import "./App.scss";
import openEye from "./open-eye.svg";
import closedEye from "./closed-eye.svg";
import PasswordValidatorStatusViewer from "./utils/PasswordValidatorStatusViewer";

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
      <PasswordValidatorStatusViewer validator={passwordValidator}/>
    </>
  );
}

export default App;
