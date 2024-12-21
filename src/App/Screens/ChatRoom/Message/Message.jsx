import React from "react";
import styles from "./Message.module.scss";
import PropTypes from "prop-types";
import MessageFooter from "./MessageFooter/MessageFooter";

const Message = ({ className, msg }) => {
  return (
    <div className={`${styles.message} ${className}`}>
      <p className={styles.messageText}>{msg.message}</p>
      <MessageFooter
        className={styles.messageFooter}
        userID={msg.user.id}
        username={msg.user.username ? msg.user.username : "undef"}
        messageDate={msg.created_at}
      ></MessageFooter>
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  msg: PropTypes.object,
};

export default Message;
