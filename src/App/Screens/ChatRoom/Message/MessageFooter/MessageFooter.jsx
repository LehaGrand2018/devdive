import React from "react";
import styles from "./MessageFooter.module.scss";
import { parseDate } from "../../../../Functions/Functions";
import PropTypes from "prop-types";
import UserPhoto from "../../../../Components/UserPhoto/UserPhoto";
import { useNavigate } from "react-router-dom";

const MessageFooter = ({ className, username, messageDate, userID }) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.messageFooter} ${className}`}>
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
      <time className={styles.messageDate} dateTime={messageDate}>
        {parseDate(messageDate)}
      </time>
    </div>
  );
};

MessageFooter.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string.isRequired,
  userID: PropTypes.string,
  messageDate: PropTypes.string.isRequired,
};

export default MessageFooter;
