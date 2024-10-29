import { React, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import GlobalStore from "../../Stores/GlobalStore";

const Header = observer(({ className, isProfile, isAddPost}) => {


  const {isLoggedIn, setIsLoggedIn} = GlobalStore;

  const login = () => {
    setIsLoggedIn("true");
  };

  const navigate = useNavigate();

  const out = () => {
    setIsLoggedIn("false");
    navigate("/");
  };

  const questionButtonHandler = () => {
    navigate("/addPost");
  }

  //there will be username from server
  let username = "neurotrier";

  const [elements, setElements] = useState([]);

  useEffect(() => {
    let elements = [];
    if (isLoggedIn === "true") {
      if(isAddPost === "false"){
        elements.push(
          <Button
            key="questionButton"
            className={styles.questionButton}
            value="Задать вопрос"
            onClick={questionButtonHandler}
          ></Button>
        );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isProfile, isAddPost, username]);

  return (
    <header className={`${styles.header} ${className}`}>
      <Logo className={styles.logo}></Logo>
      {elements}
    </header>
  );
});

Header.propTypes = {
  className: PropTypes.string,
  isProfile: PropTypes.string,
  isAddPost: PropTypes.string,
};

export default Header;
