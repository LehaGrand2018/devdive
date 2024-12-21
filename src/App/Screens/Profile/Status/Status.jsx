import React from "react";
import styles from "./Status.module.scss";
import StatusElement from "./StatusElement/StatusElement";
import PropTypes from "prop-types";
import { addEnding } from "../../../Functions/Functions";
import { useTranslation } from "react-i18next";

const Status = ({ className, reputation, role, questions, answers }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.status} ${className}`}>
      <h2 className={styles.header}>{t("profile.status")}</h2>
      <div className={styles.elements}>
        <StatusElement
          className={styles.statusElement}
          first={`${reputation}`}
          second={t("profile.reputation")}
        ></StatusElement>
        <StatusElement
          className={styles.statusElement}
          first={`${role}`}
          second={t("profile.role")}
        ></StatusElement>
        <StatusElement
          className={styles.statusElement}
          first={`${questions}`}
          second={addEnding(t("profile.question"), questions)}
        ></StatusElement>
        <StatusElement
          className={styles.statusElement}
          first={`${answers}`}
          second={addEnding(t("profile.reply"), answers)}
        ></StatusElement>
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
