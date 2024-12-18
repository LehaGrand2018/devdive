import React from "react";
import styles from "./Answer.module.scss";
import Votes from "./Votes/Votes";
import PropTypes from "prop-types";
import AnswerFooter from "./AnswerFooter/AnswerFooter";

const Answer = ({ className, content, sourceId, user, rating, date }) => {
  return (
    <div className={`${styles.answer} ${className}`}>
      <Votes className={styles.votes} sourceId={sourceId} rating={rating} />
      <p className={styles.answerText}>{content}</p>
      <AnswerFooter
        className={styles.answerFooter}
        userID={user.id}
        username={user.username}
        answerDate={date}
      ></AnswerFooter>
    </div>
  );
};

Answer.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  date: PropTypes.string,
  user: PropTypes.object.isRequired,
  sourceId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Answer;
