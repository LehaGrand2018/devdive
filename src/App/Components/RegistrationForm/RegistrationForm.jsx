import React, { useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import styles from "./RegistrationForm.module.scss";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";
import PropTypes from "prop-types";
import { signIn, signUp } from "../../Requests/AuthRequests.js";
import { useTranslation } from "react-i18next";

const RegistrationForm = ({ className, loginFunc }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [usernameLabelText, setUsernameLableText] = useState(null);
  const [emailLabelText, setEmailLableText] = useState(null);
  const [passwordLabelText, setPasswordLableText] = useState(null);
  const [validationCode, setValidationCode] = useState(1);

  const validate = (name, value = "") => {
    console.log("Validate function called");

    switch (name) {
      case "email":
        const emailRegExp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g;
        if (!emailRegExp.test(value)) {
          return t("autorization.incorrectEmailFormat");
        }
        break;

      case "password":
        if (value.length < 8) {
          return t("autorization.shortPassword");
        }
        break;
      case "username":
        if (value.length < 1) {
          return t("autorization.shortUsername");
        }
        break;
      default:
        break;
    }
    return "";
  };

  const signUpButtonHandler = async () => {
    console.log("SignUp button function called");
    if (validationCode === 1) {
      alert(t("autorization.fillOutForm"));
      return;
    }
    try {
      await signUp(username, password, email);
      signIn(email, password);
    } catch (error) {
      console.error(error);
      console.log(`Error code: ${error.response.status}`);
      console.log(`Error statusText: ${error.response.statusText}`);
      if (error.response.data) {
        console.log(`Error description: ${error.response.data.detail}`);
      }
      return;
    }

    if (localStorage.getItem("isLoggedIn") === true) {
      alert(t("autorization.registrationAlert"));
    }
  };

  const handleUsernameBlur = (event) => {
    const { name, value } = event.target;
    console.log(`${name}: `, value);
    const result = validate("username", value);
    console.log("Validate function output:", result);
    if (result !== "") {
      setUsernameLableText(result);
      setValidationCode(1);
      setUsername("");
    } else {
      setUsernameLableText("");
      setValidationCode(0);
      setUsername(value);
    }
  };

  const handleEmailBlur = (event) => {
    const { name, value } = event.target;
    console.log(`${name}: `, value);
    const result = validate("email", value);
    console.log("Validate function output:", result);
    if (result !== "") {
      setEmailLableText(result);
      setValidationCode(1);
      setEmail("");
    } else {
      setEmailLableText("");
      setValidationCode(0);
      setEmail(value);
    }
  };

  const handlePasswordBlur = (event) => {
    const { name, value } = event.target;
    console.log(`${name}: `, value);
    const result = validate("password", value);
    if (result !== "") {
      setPasswordLableText(result);
      setValidationCode(1);
      setPassword("");
    } else {
      setPasswordLableText("");
      setValidationCode(0);
      setPassword(value);
    }
  };

  return (
    <div className={`${styles.RegistrationForm}  ${className}`}>
      <h2 className={styles.RegistrationLable}>
        {t("autorization.registration")}
      </h2>
      <label className={styles.label} htmlFor="email">
        {usernameLabelText}
      </label>
      <Input
        className={styles.Input}
        placeholder={t("autorization.username")}
        type="text"
        name="username"
        id="username"
        onBlur={handleUsernameBlur}
      />
      <label className={styles.label} htmlFor="email">
        {emailLabelText}
      </label>
      <Input
        className={styles.Input}
        placeholder={t("autorization.email")}
        type="text"
        name="email"
        id="email"
        onBlur={handleEmailBlur}
      />
      <label className={styles.label} htmlFor="password">
        {passwordLabelText}
      </label>
      <PasswordInput
        className={styles.Input}
        placeholder={t("autorization.password")}
        type="password"
        name="password"
        id="password"
        onBlur={handlePasswordBlur}
      />
      <Button
        className={styles.Button}
        value={t("autorization.signUp")}
        onClick={(e) => {
          e.preventDefault();
          signUpButtonHandler();
        }}
      />
      <Button
        className={styles.LoginButton}
        value={t("autorization.signIn")}
        onClick={(e) => {
          e.preventDefault();
          loginFunc();
        }}
      />
    </div>
  );
};

RegistrationForm.propTypes = {
  className: PropTypes.string,
  registrationFunc: PropTypes.func,
  loginFunc: PropTypes.func,
};

export default RegistrationForm;
