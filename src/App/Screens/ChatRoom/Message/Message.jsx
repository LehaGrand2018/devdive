import React from "react";
import styles from "./Message.module.scss";
import PropTypes from "prop-types";
import MessageFooter from "./MessageFooter/MessageFooter";

const Message = ({ className, msg }) => {
  return (
    <div className={`${styles.message} ${className}`}>
      <p className={styles.messageText}>{msg.data}</p>
      <MessageFooter
        className={styles.messageFooter}
        userID={msg.user_id}
        username={msg.username ? msg.username : "undef"}
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
