import React, { useContext, useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import styles from "./RegistrationForm.module.scss";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";
import PropTypes from "prop-types";
import { AuthContext } from "../../Contexts/AuthContext.jsx";

const RegistrationForm = ({ className, registrationFunc, loginFunc }) => {
  const authCtx = useContext(AuthContext);
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

  const signUp = async () => {
    
    console.log("SignUp button function called");
    try {
      await authCtx.signUp(username, password, email);
      authCtx.signIn(email, password);
    } catch (error) {
      console.error(error)
      console.log(`Error code: ${error.response.status}`)
      console.log(`Error statusText: ${error.response.statusText}`)
      if(error.response.data){
        console.log(`Error description: ${error.response.data.detail}`)
      }
      return;
    }

    if (localStorage.getItem("isLoggedIn") === true) {
      alert("Вы успешно зарегистрировались на сайте!");
    }
  };

  return (
    <div className={`${styles.RegistrationForm}  ${className}`}>
      <h2 className={styles.RegistrationLable}>Регистрация</h2>

      <Input
        className={styles.Input}
        placeholder="Имя пользователя"
        type="text"
        name="username"
        id="username"
        onBlur={handleBlur}
      />
      <Input
        className={styles.Input}
        placeholder="Email"
        type="text"
        name="email"
        id="email"
        onBlur={handleBlur}
      />
      <PasswordInput
        className={styles.Input}
        placeholder="Пароль"
        type="password"
        name="password"
        id="password"
        onBlur={handleBlur}
      />
      <Button
        className={styles.Button}
        value="Регистрация"
        onClick={(e) => {
          e.preventDefault();
          signUp();
        }}
      />
      <Button
        className={styles.LoginButton}
        value="Вход"
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
