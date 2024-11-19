import React from "react";
import QuestionInfo from "./QuestionInfo/QuestionInfo";

import styles from "./Question.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Question = ({ className, questionTitle, questionId, username, date, answersCount, votesCount, tags}) => {
  const tagsToShow = tags.map((tag, index) => {
    return (
      <p key={index} className={styles.tag}>
        {" "}
        {`#${tag}`}
      </p>
    );
  });

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`${styles.question} ${className}`}>
      <QuestionInfo
        className={styles.questionInfo}
        username={username}
        date={date}
        answersCount={answersCount}
        votesCount={votesCount}
      ></QuestionInfo>
      <h3
        className={styles.questionTitle}
        onClick={() => {
          navigate(`${location.pathname}/${questionId}`);
        }}
      >{`${questionTitle[0].toUpperCase()}${questionTitle.slice(1)}`}</h3>
      <div className={styles.tags}>{tagsToShow}</div>
    </div>
  );
};

Question.propTypes = {
  className: PropTypes.string,
  questionTitle: PropTypes.string,
  questionId: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.number,
  answersCount: PropTypes.number,
  votesCount: PropTypes.number,
  tags: PropTypes.array,
};

export default Question;
