import React, { useState } from "react";

import styles from "./MessageForm.module.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";


const MessageForm = ({ className, socket, onMessageSend }) => {
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You input:", inputValue);

    (async () => {
      if ( inputValue && inputValue.length > 0){
        const msg = {
          data: inputValue
        }
        const send = JSON.stringify(msg);
        console.log("SEND:", send)
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(send);
          // const user = await getUser(localStorage.getItem("user_id"));
          // const msgForDisplay = {
          //   data: inputValue,
          //   created_at: new Date(Date.now()).toISOString(),
          //   user_id: localStorage.getItem("user_id"),
          //   username: user.user.username,
          // }
          // onMessageSend(msgForDisplay);
          setInputValue("");
        } else {
          console.error("Socket is not open.");
        }
      }
    })()
    };
    
  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        placeholder={t("chatRoom.message")}
        value={inputValue ? inputValue : ""}
        id="answerInput"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.formButton} type="submit"></button>
    </form>
  );
};

MessageForm.propTypes = {
  className: PropTypes.string,
  socket: PropTypes.object,
  onMessageSend: PropTypes.func,
};
export default MessageForm;
