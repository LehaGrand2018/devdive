import { React, useEffect, useState } from "react";
import Logo from "../Components/Logo/Logo";
import Button from "../Components/Button/Button";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";

const Header = (props) => {
  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn("true");
  };

  const out = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn("false");
  };
  //there will be username from server
  let username = "neurotrier";
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [elements, setElements] = useState([]);

  useEffect(() => {
    let elements = [];
    if (isLoggedIn === "true") {
      elements.push(
        <Button
          key="questionButton"
          className={styles.questionButton}
          value="Задать вопрос"
          onClick={out}
        ></Button>,
        <p key="username" className={styles.username}>
          {username}
        </p>,
        <div
          key="profilePhoto"
          className={styles.profilePhoto}
          style={{ backgroundImage: "" }}
        ></div>
      );
    } else {
      elements.push(
        <Button
          key="signInButton"
          className={styles.signInButton}
          value="Вход"
          onClick={login}
        ></Button>
      );
    }
    setElements(elements);
  }, [isLoggedIn, username]);

  return (
    <header className={`${styles.header} ${props.className}`}>
      <Logo className={styles.logo}></Logo>
      {elements}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
