import React from "react";
import Button from "../Components/Button/Button";
import Tag from "./Tags/Tags";
import styles from "./NavigationPanel.module.scss";
import PropTypes from "prop-types";

const NavigationPanel = (props) => {
  return (
    <div className={`${styles.NavigationPanel} ${props.className}`}>
      <Button
        className={styles.PanelButton}
        value="Главная"
        onClick={null}
      ></Button>
      <Button
        className={styles.PanelButton}
        value="Мои вопросы"
        onClick={null}
      ></Button>
      <Button
        className={styles.PanelButton}
        value="Метки"
        onClick={null}
      ></Button>

      <Tag value="#tag"></Tag>

      <Button
        className={styles.PanelButton}
        value="Сбросить метки"
        onClick={null}
      ></Button>
    </div>
  );
};

NavigationPanel.propTypes = {
  className: PropTypes.string,
};

export default NavigationPanel;
