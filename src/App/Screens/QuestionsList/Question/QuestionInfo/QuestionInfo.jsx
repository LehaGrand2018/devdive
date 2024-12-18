import React from "react";
import styles from "./QuestionInfo.module.scss";
import { parseDate } from "../../../../Functions/Functions";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserPhoto from "../../../../Components/UserPhoto/UserPhoto";

const QuestionInfo = ({ className, user, date }) => {

  const navigate = useNavigate();

  return (
    <div className={`${styles.questionInfo} ${className}`}>
      <div
        className={styles.user}
        onClick={() => {
          navigate(`../profile/${user.id}`);
        }}
      >
        <UserPhoto className={styles.userPhoto} userID={user.id} username={user.username}/>
        <p className={styles.userName}>{user.username}</p>
      </div>
      <time className={styles.questionDate} dateTime={date}>
        {parseDate(date)}
      </time>
    </div>
  );
};
QuestionInfo.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
};
export default QuestionInfo;
