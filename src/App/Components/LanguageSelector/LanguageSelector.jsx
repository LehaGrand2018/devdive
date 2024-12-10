import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./LanguageSelector.module.scss";
import i18next from "../../../i18n";

const LanguageSelector = ({ className }) => {
  const [activeEn, setActiveEn] = useState("false");
  const [activeRu, setActiveRu] = useState("false");

  useEffect(() => {
    switch (i18next.language) {
      case "en":
        localStorage.setItem("language", "en");
        setActiveEn("true");
        setActiveRu("false");
        break;
      case "ru":
        localStorage.setItem("language", "ru");
        setActiveRu("true");
        setActiveEn("false");
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18next.language]);

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    window.location.reload();
  }

  return (
    <div className={`${styles.selector} ${className}`}>
      <div className={styles.icon}></div>
      <p className={styles.text}>
        <span
          className={`${styles.text} ${styles.lang} ${
            activeRu === "true" ? styles.active : ""
          }`}
          onClick={() => {
            changeLanguage("ru");
          }}
        >
          Ru
        </span>{" "}
        |{" "}
        <span
          className={`${styles.text} ${styles.lang} ${
            activeEn === "true" ? styles.active : ""
          }`}
          onClick={() => {
            changeLanguage("en")
          }}
        >
          En
        </span>
      </p>
    </div>
  );
};

LanguageSelector.propTypes = {
  className: PropTypes.string,
};
export default LanguageSelector;
