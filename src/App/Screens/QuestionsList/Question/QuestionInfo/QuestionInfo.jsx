import React from "react";
import styles from "./QuestionInfo.module.scss";
import { parseDate, addEnding } from "../../../../Functions/Functions";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const QuestionInfo = ({
  className,
  user,
  date,
  answersCount,
  votesCount,
  rating,
}) => {
  const navigate = useNavigate();

  const openUserProfile = () => {
    navigate(`../profile/${user.id}`);
  };

  return (
    <div className={`${styles.QuestionInfo} ${className}`}>
      <div
        className={styles.UserPhoto}
        style={{ backgroundImage: "none" /*userPhoto*/ }}
        onClick={openUserProfile}
      ></div>
      <p className={styles.UserName} onClick={openUserProfile}>
        {user.username}
      </p>
      <time className={styles.QuestionDate} dateTime={date}>
        {parseDate(date)}
      </time>
      <p className={styles.QuestionAnswers}>
        {`${answersCount} ${addEnding("ответ", answersCount)}`}
      </p>
      <p className={styles.QuestionVotes}>
        {`${votesCount} ${addEnding("голос", votesCount)}`}
      </p>
      <p className={styles.QuestionVotes}>{`рейтинг ${rating}`}</p>
    </div>
  );
};
QuestionInfo.propTypes = {
  className : PropTypes.string,
  user : PropTypes.object,
  date : PropTypes.string,
  answersCount : PropTypes.number,
  votesCount : PropTypes.number,
  rating : PropTypes.number,
};
export default QuestionInfo;
