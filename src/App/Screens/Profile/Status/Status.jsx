import React from "react";
import styles from "./Status.module.scss";
import StatusElement from "./StatusElement/StatusElement";
import PropTypes from "prop-types";
import { addEnding } from "../../../Functions/Functions";

const Status = ({ className, reputation, role, questions, answers }) => {
  return (
    <div className={`${styles.status} ${className}`}>
      <h2 className={styles.header}>Статус</h2>
      <div className={styles.elements}>
        <StatusElement first={`${reputation}`} second='репутация'></StatusElement>
        <StatusElement first={role} second='роль'></StatusElement>
        <StatusElement first={`${questions}`} second={addEnding('вопрос', questions)}></StatusElement>
        <StatusElement first={`${answers}`} second={addEnding('ответ', answers)}></StatusElement>
      </div>
    </div>
  );
};

Status.propTypes = {
  className: PropTypes.string,
  reputation: PropTypes.number,
  role: PropTypes.string,
  questions: PropTypes.number,
  answers: PropTypes.number,
};

export default Status;
