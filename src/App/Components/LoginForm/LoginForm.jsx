import React, { useState } from "react";
import Input from "../Input/Input.jsx";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";
import Button from "../Button/Button.jsx";
import styles from "./LoginForm.module.scss";
import PropTypes from "prop-types";
import { signIn } from "../../Requests/AuthRequests.js";
import { useTranslation } from "react-i18next";

const LoginForm = ({ className, registrationFunc }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState(null);
  const [emailLabelText, setEmailLableText] = useState(null);
  const [passwordLabelText, setPasswordLableText] = useState(null);
  const [password, setPassword] = useState(null);
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

      default:
        break;
    }
    return "";
  };

  const signInButtonHandler = async () => {
    console.log("SignIn button function called");
    if (validationCode === 1) {
      alert(t("autorization.fillOutForm"));
      return;
    }
    try {
      await signIn(email, password);
    } catch (error) {
      if (error.status === 403) {
        alert(t("autorization.incorrectEmailPassword"));
      }
      if (error.status === 404) {
        alert(t("autorization.userNotFound"));
      }
      console.error(error);
      console.log(`Error code: ${error.response.status}`);
      console.log(`Error statusText: ${error.response.statusText}`);
      if (error.response.data.detail) {
        console.log(`Error description: ${error.response.data.detail}`);
      }
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
    <form className={`${styles.LoginForm} ${className}`}>
      <h2 className={styles.LoginLable}>{t("autorization.login")}</h2>
      <label className={styles.label} htmlFor="email">
        {emailLabelText}
      </label>
      <Input
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
        placeholder={t("autorization.password")}
        type="text"
        name="password"
        id="password"
        onBlur={handlePasswordBlur}
      />
      <Button
        className={styles.Button}
        value={t("autorization.signIn")}
        onClick={(e) => {
          e.preventDefault();
          console.log(email, password);
          signInButtonHandler();
        }}
      />
      <Button
        className={styles.RegistrationButton}
        value={t("autorization.signUp")}
        onClick={(e) => {
          e.preventDefault();
          registrationFunc();
        }}
      />
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  loginFunc: PropTypes.func,
  registrationFunc: PropTypes.func,
  onClick: PropTypes.func,
  onSumbit: PropTypes.func,
};

export default LoginForm;
