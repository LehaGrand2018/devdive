import React, { useEffect, useState, useContext } from "react";
import styles from "./NavigationPanel.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { MenuContext } from "../../Contexts/MenuContext";
import GlobalStore from "../../Stores/GlobalStore";
import { useTranslation } from "react-i18next";

const NavigationPanel = observer(({ className }) => {
  const [buttons, setButtons] = useState();

  const { t } = useTranslation();

  const { isLoggedIn } = GlobalStore;

  const { active } = useContext(MenuContext);

  const isVisible = active.value;

  useEffect(() => {
    if (isLoggedIn === "true") {
      setButtons(
        <>
          <NavLink
            className={({ isActive }) => `${styles.PanelButton}`}
            to={`/questions?user_id=${localStorage.getItem("user_id")}`}
          >
            {t("buttons.myQuestions")}
          </NavLink>
          <NavLink
            className={({ isActive }) => `${styles.PanelButton}`}
            to={`chatRoom?user_id=${localStorage.getItem("user_id")}`}
          >
            {t("buttons.chat")}
          </NavLink>
        </>
      );
    } else {
      setButtons(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div
      className={`${styles.NavigationPanel} ${className} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <NavLink className={({ isActive }) => `${styles.PanelButton}`} to="/">
        {t("buttons.main")}
      </NavLink>

      <NavLink className={({ isActive }) => `${styles.PanelButton}`} to="/tags">
        {t("buttons.tags")}
      </NavLink>

      {buttons}
    </div>
  );
});

NavigationPanel.propTypes = {
  className: PropTypes.string,
};

export default NavigationPanel;
