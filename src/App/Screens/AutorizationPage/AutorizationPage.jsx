import React, { useState, useEffect } from "react";
import styles from "./AutorizationPage.module.scss";

import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import GlobalStore from "../../Stores/GlobalStore";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const AutorizationPage = observer(({ className }) => {
  const { t } = useTranslation();
  const [isRegistered, setIsRegistered] = useState("true");
  const [element, setElement] = useState(null);
  const { isLoggedIn } = GlobalStore;
  const navigate = useNavigate();

  useEffect(() => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isRegistered: ", isRegistered);
    if (isLoggedIn === "true") {
      navigate("/");
    }
    if (isRegistered === "true") {
      setElement(
        <LoginForm
          className={styles.loginForm}
          registrationFunc={() => {
            setIsRegistered("false");
          }}
        />
      );
    } else {
      setElement(
        <RegistrationForm
          className={styles.registrationForm}
          loginFunc={() => {
            setIsRegistered("true");
          }}
        />
      );
    }
    //eslint-disable-next-line
  }, [isRegistered, isLoggedIn]);

  return (
    <div className={`${styles.AutorizationPage} ${className}`}>
      <h2 className={styles.header}>{t("autorization.title")}</h2>
      {element}
    </div>
  );
});

AutorizationPage.propTypes = {
  className: PropTypes.string,
};

export default AutorizationPage;
