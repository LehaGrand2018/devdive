import React from "react";
import styles from "./MessageFooter.module.scss";
import { parseDate } from "../../../../Functions/Functions";
import PropTypes from "prop-types";

const MessageFooter = ({ className, username, userPhoto, messageDate }) => {
  return (
    <div className={`${styles.messageFooter} ${className}`}>
      <div className={styles.user}>
        <div
          className={styles.userPhoto}
          styles={{ backgroundImage: "" }}
        >{userPhoto.toUpperCase()}</div>
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
  userPhoto: PropTypes.string,
  messageDate: PropTypes.string.isRequired,
};

export default MessageFooter;
