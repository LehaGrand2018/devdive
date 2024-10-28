import { React, useEffect, useState } from "react";
import Logo from "../Components/Logo/Logo";
import Button from "../Components/Button/Button";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";
import { Link, redirect, useNavigate } from "react-router-dom";

const Header = ({ className, isProfile, isAddPost}) => {
  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn("true");

  };

  const navigate = useNavigate();

  const out = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn("false");
    navigate("/");
  };

  const questionButtonHandler = () => {
    navigate("/addPost");
  }

  //there will be username from server
  let username = "neurotrier";
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [elements, setElements] = useState([]);

  useEffect(() => {
    let elements = [];
    if (isLoggedIn === "true") {
      if(isAddPost === "false"){
        console.log("isAddPost add post")
        elements.push(
          <Button
            key="questionButton"
            className={styles.questionButton}
            value="Задать вопрос"
            onClick={questionButtonHandler}
          ></Button>
        );
      } else{
        console.log("Not display questionButton")
      }
      if (isProfile === "false") {
        elements.push(
          <div key="headerUser"className={styles.user}>
            <p className={styles.username}>
              {username}
            </p>
            <Link
              to="/profile"
              className={styles.profilePhoto}
              style={{ backgroundImage: "" }}
            ></Link>

          </div>
        );
      } else {
        console.log("else called");
        elements.push(
          <Button
            key="signOutButton"
            className={styles.signInButton}
            value="Выход"
            onClick={out}
          ></Button>
        );
      }
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
    console.log("New isProfile " + isProfile);
    console.log("New isAddPost " + isAddPost);
  }, [isLoggedIn, isProfile, isAddPost, username]);

  return (
    <header className={`${styles.header} ${className}`}>
      <Logo className={styles.logo}></Logo>
      {elements}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  isProfile: PropTypes.string,
  isAddPost: PropTypes.string,
};

export default Header;
