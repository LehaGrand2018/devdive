import React, { useContext, useState } from "react";

import Input from "../Input/Input.jsx";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";

import Button from "../Button/Button.jsx";
import styles from "./LoginForm.module.scss";

// import buttonStyles from '../Button/Button.module.scss';

import PropTypes from "prop-types";
import { AuthContext } from "../../Contexts/AuthContext.jsx";

const LoginForm = ({ className, registrationFunc }) => {

  const authCtx = useContext(AuthContext);

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

  const signIn = async () => {
    console.log("SignIn button function called");
    try {
      await authCtx.signIn(email, password);
    } catch (error) {
      console.error(error)
      console.log(`Error code: ${error.response.status}`)
      console.log(`Error statusText: ${error.response.statusText}`)
      if(error.response.data.detail){
        console.log(`Error description: ${error.response.data.detail}`)
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
      <h2 className={styles.LoginLable}>Вход</h2>
      <Input
        placeholder="Email"
        type="text"
        name="email"
        id="email"
        onBlur={handleBlur}
      />
      <PasswordInput
        placeholder="Пароль"
        type="text"
        name="password"
        id="password"
        onBlur={handleBlur}
      />
      <Button
        className={styles.Button}
        value="Логин"
        onClick={(e) => {
          e.preventDefault();
          console.log(email, password, username);
          signIn(email, password);
        }}
      />
      <Button
        className={styles.RegistrationButton}
        value="Регистрация"
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
