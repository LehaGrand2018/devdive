import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Tag from "./Tags/Tags";
import styles from "./NavigationPanel.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import GlobalStore from "../../Stores/GlobalStore";

const NavigationPanel = observer(({ className}) => {
  const [button, setButton] = useState();

  // let isLoggedIn = null;
  const {isLoggedIn} = GlobalStore;

  useEffect(() => {

    if (isLoggedIn === "true") {

      setButton(
        <NavLink
          className={({ isActive }) =>
            `${styles.PanelButton} ${isActive ? styles.active : ""}`
          }
          to="/posts/:id"
        >
          Мои вопросы
        </NavLink>
      );
    } else {
      setButton(null); 
    }
  }, [isLoggedIn]);

  return (
    <div className={`${styles.NavigationPanel} ${className}`}>
      <NavLink
        className={({ isActive }) =>
          `${styles.PanelButton} ${isActive ? styles.active : ""}`
        }
        to="/"
      >
        Главная
      </NavLink>

      {button}

      <NavLink
        className={({ isActive }) =>
          `${styles.PanelButton} ${isActive ? styles.active : ""}`
        }
        to="/tags"
      >
        Метки
      </NavLink>

      <Tag value="#tag"></Tag>

      <Button
        className={styles.PanelButton}
        value="Сбросить метки"
        onClick={null}
      />
    </div>
  );
});

NavigationPanel.propTypes = {
  className: PropTypes.string,
};

export default NavigationPanel;
