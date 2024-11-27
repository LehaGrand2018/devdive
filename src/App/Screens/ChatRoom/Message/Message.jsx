import React from "react";
import styles from "./Message.module.scss";
import PropTypes from "prop-types";
import MessageFooter from "./MessageFooter/MessageFooter";

const Message = ({ className, content, user, date }) => {
  // console.log("PROPS:", className, content, user, date)
  console.log("displayed message")
  return (
    <div className={`${styles.message} ${className}`}>
      <p className={styles.messageText}>{content}</p>
      <MessageFooter
        className={styles.messageFooter}
        userPhoto={user.username[0]}
        username={user.username}
        messageDate={date}
      ></MessageFooter>
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
};

export default Message;
