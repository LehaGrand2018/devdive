import React, { useEffect, useState, useContext } from "react";
import Button from "../Button/Button";
import Tag from "./Tags/Tags";
import styles from "./NavigationPanel.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { MenuContext } from "../../Contexts/MenuContext";
import GlobalStore from "../../Stores/GlobalStore";

const NavigationPanel = observer(({ className}) => {

  const [button, setButton] = useState();
  
  const {isLoggedIn} = GlobalStore;

  const {active} = useContext(MenuContext);
  
  const isVisible = active.value;

  useEffect(() => {

    if (isLoggedIn === "true") {

      setButton(
        <NavLink
          className={({ isActive }) =>
            `${styles.PanelButton} ${isActive ? styles.active : ""}`
          }
          to="/questions/"
        >
          Мои вопросы
        </NavLink>
      );
    } else {
      setButton(null); 
    }
  }, [isLoggedIn]);

  return (
    <div className={`${styles.NavigationPanel} ${className} ${isVisible ? styles.visible : ""}`}>
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
