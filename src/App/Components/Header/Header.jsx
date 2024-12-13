import { React, useContext, useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import GlobalStore from "../../Stores/GlobalStore";
import { MenuContext } from "../../Contexts/MenuContext";
import { signOut } from "../../Requests/AuthRequests";
import { getUser } from "../../Requests/UsersRequests";
import { useTranslation } from "react-i18next";

const Header = observer(({ className }) => {
  const { active } = useContext(MenuContext);
  const { t } = useTranslation();
  const { isLoggedIn, username, setUsername } = GlobalStore;
  const location = useLocation();
  const navigate = useNavigate();

  const out = () => {
    signOut();
    navigate("/");
  };

  const login = () => {
    navigate("/autorization");
  };

  const questionButtonHandler = async () => {
    navigate("/addQuestion");
  };

  const [elements, setElements] = useState([]);
  // setup header
  useEffect(() => {
    if (isLoggedIn === "true") {
      (async () => {
        const user = await getUser(localStorage.getItem("user_id"));
        setUsername(user.user.username);
      })();
    }
  }, [isLoggedIn, setUsername]);

  useEffect(() => {
    let elements = [];
    if (isLoggedIn === "true") {
      if (location.pathname !== "/addQuestion") {
        elements.push(
          <Button
            key="questionButton"
            className={styles.questionButton}
            value={t("buttons.addQuestion")}
            onClick={questionButtonHandler}
          />
        );
      }
      if (!location.pathname.includes("/profile")) {
        elements.push(
          <div key="headerUser" className={styles.user}>
            <Link
              to={`/profile/${localStorage.getItem("user_id")}`}
              className={styles.username}
            >
              {username}
            </Link>
            <Link
              to={`/profile/${localStorage.getItem("user_id")}`}
              className={styles.profilePhoto}
              style={{ backgroundImage: "" }}
            ></Link>
          </div>
        );
      } else if (
        window.location.pathname.split("/profile/")[1] ===
        localStorage.getItem("user_id")
      ) {
        elements.push(
          <Button
            key="signOutButton"
            className={styles.signInButton}
            value={t("autorization.signOut")}
            onClick={out}
          />
        );
      }
    } else if (location.pathname !== "/autorization") {
      elements.push(
        <Button
          key="signInButton"
          className={styles.signInButton}
          value={t("autorization.signIn")}
          onClick={login}
        />
      );
    }
    setElements(elements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, username, location.pathname]);

  return (
    <header className={`${styles.header} ${className}`}>
      <Menu
        className={styles.menu}
        isActive={active.value}
        setIsActive={active.set}
      />
      <Logo
        className={styles.logo}
        onClick={() => {
          navigate("/");
        }}
      />
      {elements}
    </header>
  );
});

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
