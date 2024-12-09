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

  const [buttons, setButtons] = useState();
  
  const {isLoggedIn} = GlobalStore;

  const {active} = useContext(MenuContext);
  
  const isVisible = active.value;

  useEffect(() => {

    if (isLoggedIn === "true") {

      setButtons(<>
        <NavLink
          className={({ isActive }) =>
            `${styles.PanelButton}`
          }
          to={`/questions?user_id=${localStorage.getItem("user_id")}`}
        >
          Мои вопросы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.PanelButton}`
          }
          to={`chatRoom?user_id=${localStorage.getItem("user_id")}`}
        >
          Чат комната
        </NavLink>

      </>
      );
    } else {
      setButtons(null); 
    }
  }, [isLoggedIn]);

  return (
    <div className={`${styles.NavigationPanel} ${className} ${isVisible ? styles.visible : ""}`}>
      <NavLink
        className={({ isActive }) =>
          `${styles.PanelButton}`
        }
        to="/"
      >
        Главная
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${styles.PanelButton}`
        }
        to="/tags"
      >
        Метки
      </NavLink>

      {buttons}

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
