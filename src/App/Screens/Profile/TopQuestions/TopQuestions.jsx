import PropTypes from "prop-types";
import React from "react";
import styles from "./TopQuestions.module.scss";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const TopQuestions = ({ className, questions }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  let elements = null;
  if (questions) {
    elements = questions.map(({ content, id }, index) => {
      return (
        <p key={id} className={styles.question}>{`${index + 1}. ${content}`}</p>
      );
    });
  }

  const handleClick = () => {
    const url = location.pathname;
    const regex = /\/profile\/(.+)/;
    navigate(`/questions?user_id=${url.match(regex)[1]}`);
  };

  return (
    <div className={`${styles.top} ${className}`}>
      <h2 className={styles.header} onClick={handleClick}>
        {t("profile.questionsTop")}
      </h2>
      <div className={styles.questions}>{elements}</div>
    </div>
  );
};

TopQuestions.propTypes = {
  className: PropTypes.string,
  questions: PropTypes.array.isRequired,
};

export default TopQuestions;
