import React, { useState } from "react";

import styles from "./MessageForm.module.scss";
import PropTypes from "prop-types";


const MessageForm = ({ className, socket, addMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You input:", inputValue);

      if ( inputValue && inputValue.length > 0){
        const msg = {
          data: inputValue
        }
        const send = JSON.stringify(msg);
        console.log("SEND:", send)
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(send);
        } else {
          console.error("Socket is not open.");
        }
      }
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.formInput}
        placeholder={"Введите сообщение"}
        value={inputValue ? inputValue : ""}
        id="answerInput"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.formButton} ></button>
    </form>
  );
};

MessageForm.propTypes = {
  className: PropTypes.string,
  questionId: PropTypes.string,
  setQuestion: PropTypes.func,
};
export default MessageForm;
