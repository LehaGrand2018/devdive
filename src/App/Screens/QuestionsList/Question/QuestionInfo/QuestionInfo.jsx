import React from "react";
import styles from "./QuestionInfo.module.scss";
import { parseDate } from "../../../../Functions/Functions";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const QuestionInfo = ({ className, user, date }) => {
  const navigate = useNavigate();

  const openUserProfile = () => {
    navigate(`../profile/${user.id}`);
  };

  return (
    <div className={`${styles.QuestionInfo} ${className}`}>
      <div className={styles.user}>
        <div
          className={styles.UserPhoto}
          style={{ backgroundImage: "none" /*userPhoto*/ }}
          onClick={openUserProfile}
        ><span className={styles.letter}>{user.username.slice(0,1).toUpperCase()}</span>
        </div>
        <p className={styles.UserName} onClick={openUserProfile}>
          {user.username}
        </p>
      </div>
      <time className={styles.QuestionDate} dateTime={date}>
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
