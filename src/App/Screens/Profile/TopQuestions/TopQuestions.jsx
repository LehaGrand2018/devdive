import PropTypes from "prop-types";
import React from "react";
import styles from "./TopQuestions.module.scss";

const TopQuestions = ({ className, questions }) => {
  const elements = questions.map(({ content, question_id }, index) => {
    return (
      <p key={question_id} className={styles.question}>{`${index + 1}. ${content}`}</p>
    );
  });

  return (
    <div className={`${styles.top} ${className}`}>
      <h2 className={styles.header}>Топ вопросов</h2>
      <div className={styles.questions}>{elements}</div>
    </div>
  );
};

TopQuestions.propTypes = {
  className: PropTypes.string,
  questions: PropTypes.array.isRequired,
};

export default TopQuestions;
