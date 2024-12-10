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
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const validate = (name, value) => {
    console.log("Validate function called");
    let error = "undefined";
    let code = 0;

    switch (name) {
      case "email":
        break;
      case "password":
        break;

      case "username":
        break;

      default:
        break;
    }
    return { error, code };
  };

  const signInButtonHandler = async () => {
    console.log("SignIn button function called");
    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
      console.log(`Error code: ${error.response.status}`);
      console.log(`Error statusText: ${error.response.statusText}`);
      if (error.response.data.detail) {
        console.log(`Error description: ${error.response.data.detail}`);
      }
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    console.log(`${name}: `, value);
    const { code } = validate(name, value);

    if (code !== 0) {
      console.error("Validation error");
    }
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      case "username":
        setUsername(value);
        break;
      default:
        console.log("Input data!");
        break;
    }
  };

  return (
    <form className={`${styles.LoginForm} ${className}`}>
      <h2 className={styles.LoginLable}>{t("autorization.login")}</h2>
      <Input
        placeholder={t("autorization.email")}
        type="text"
        name="email"
        id="email"
        onBlur={handleBlur}
      />
      <PasswordInput
        placeholder={t("autorization.password")}
        type="text"
        name="password"
        id="password"
        onBlur={handleBlur}
      />
      <Button
        className={styles.Button}
        value={t("autorization.signIn")}
        onClick={(e) => {
          e.preventDefault();
          console.log(email, password, username);
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
