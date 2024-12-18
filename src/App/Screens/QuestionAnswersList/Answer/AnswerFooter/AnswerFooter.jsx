import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AnswerFooter.module.scss";
import { parseDate } from "../../../../Functions/Functions";
import PropTypes from "prop-types";

import UserPhoto from "../../../../Components/UserPhoto/UserPhoto";

const AnswerFooter = ({ className, username, userID, answerDate }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.answerFooter} ${className}`}>
      <div
        className={styles.user}
        onClick={() => {
          navigate(`../profile/${userID}`);
        }}
      >
        <UserPhoto
          className={styles.userPhoto}
          userID={userID}
          username={username}
        />
        <p className={styles.username}>{username}</p>
      </div>
      <time className={styles.answerDate} dateTime={answerDate}>
        {parseDate(answerDate)}
      </time>
    </div>
  );
};

AnswerFooter.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string.isRequired,
  userPhoto: PropTypes.string,
  answerDate: PropTypes.string.isRequired,
};

export default AnswerFooter;
