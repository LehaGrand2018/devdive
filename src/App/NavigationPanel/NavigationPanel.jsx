import React from "react";
import Button from "../Components/Button/Button";
import Tag from "./Tags/Tags";
import styles from "./NavigationPanel.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";



const NavigationPanel = ({className}) => {
  return (
    <div className={`${styles.NavigationPanel} ${className}`}>

      <NavLink
        className={({ isActive }) =>
          `${styles.PanelButton} ${isActive ? styles.active : ''}`
        }
        to="/"
      >
        Главная
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${styles.PanelButton} ${isActive ? styles.active : ''}`
        }
        to="/posts/:id"
      >
        Мои вопросы
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${styles.PanelButton} ${isActive ? styles.active : ''}`
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
};

NavigationPanel.propTypes = {
  className: PropTypes.string,
};

export default NavigationPanel;
