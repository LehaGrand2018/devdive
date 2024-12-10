import React, { useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import styles from "./RegistrationForm.module.scss";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";
import PropTypes from "prop-types";
import { signIn, signUp } from "../../Requests/AuthRequests.js";
import { useTranslation } from "react-i18next";

const RegistrationForm = ({ className, registrationFunc, loginFunc }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

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

  const signUpButtonHandler = async () => {
    console.log("SignUp button function called");
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

  return (
    <div className={`${styles.RegistrationForm}  ${className}`}>
      <h2 className={styles.RegistrationLable}>
        {t("autorization.registration")}
      </h2>

      <Input
        className={styles.Input}
        placeholder={t("autorization.username")}
        type="text"
        name="username"
        id="username"
        onBlur={handleBlur}
      />
      <Input
        className={styles.Input}
        placeholder={t("autorization.email")}
        type="text"
        name="email"
        id="email"
        onBlur={handleBlur}
      />
      <PasswordInput
        className={styles.Input}
        placeholder={t("autorization.password")}
        type="password"
        name="password"
        id="password"
        onBlur={handleBlur}
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
