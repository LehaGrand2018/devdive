import React from "react";
import QuestionInfo from "./QuestionInfo/QuestionInfo";

import styles from "./Question.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Votes from "../../QuestionAnswersList/Answer/Votes/Votes";

const Question = ({ className, questionTitle, questionId, user, date, answersCount, votesCount, rating, tags}) => {
  console.log()
  const tagsToShow = tags.map(({id, name}) => {

    return (
      <p key={id} className={styles.tag}>
        {" "}
        {`#${name}`}
      </p>
    );
  });

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`${styles.question} ${className}`}>
      <QuestionInfo
        className={styles.questionInfo}
        user={user}
        date={date}
      ></QuestionInfo>
      <h3
        className={styles.questionTitle}
        onClick={() => {
          navigate(`${location.pathname}/${questionId}`);
        }}
      >{`${questionTitle[0].toUpperCase()}${questionTitle.slice(1)}`}</h3>
      <Votes className={styles.votes} rating={rating} sourceId={questionId}/>
      <div className={styles.tags}>{tagsToShow}</div>
    </div>
  );
};

Question.propTypes = {
  className: PropTypes.string,
  questionTitle: PropTypes.string,
  questionId: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
  tags: PropTypes.array,
  id: PropTypes.string,
};

export default Question;
