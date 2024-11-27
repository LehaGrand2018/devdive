import React, { useEffect, useState } from "react";
import styles from "./ChatRoom.module.scss";
import PropTypes from "prop-types";
import MessageForm from "./MessageForm/MessageForm";
import Message from "./Message/Message";
import { CHAT_WEBSOKET_URL } from "../../Constants/URLs";

const ChatRoom = ({ className }) => {
  const [messages, setMessages] = useState([]);
  const [elements, setElements] = useState(null);
  const [socket, setSocket] = useState(null);
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    const socket = new WebSocket(
      `${CHAT_WEBSOKET_URL}${localStorage.getItem("user_id")}/ws`
    );
    setSocket(socket);

    socket.onopen = () => {
      console.log("Socket opened");
      setStatus("Connected");
    };

    socket.onmessage = (messageEvent) => {
      const dataString = messageEvent.data.replaceAll(`'`, `"`);
      const message = JSON.parse(dataString);
      // addMessage(message);
    };

    socket.onerror = (event) => {
      console.log("Error event:", event);
      setStatus("Error");
    };

    socket.onclose = (closeEvent) => {
      console.log("Close event:", closeEvent);
      setStatus("Disconnected");
    };
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    setElements(
      messages.map((msg, index) => (
        <Message
          className={styles.message}
          content={msg.content}
          date={msg.date}
          user={msg.user}
          key={index}
        />
      ))
    );
  }, [messages]);

  const addMessage = (message) => {
    const newMessages = [
      ...messages,
      {
        content: message.data,
        date: message.created_at,
        user: {
          username: message.username,
          user_id: message.user_id,
        },
      },
    ];
    setMessages(newMessages);
  };

  return (
    <div className={`${styles.chat} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.headerText}>Чат комната</h2>
        <h3 className={styles.headerStatus}>Status: {status}</h3>
      </div>
      <div className={styles.messagesList}>{elements}</div>
      <MessageForm
        className={styles.messageForm}
        socket={socket}
        addMessage={addMessage}
      />
    </div>
  );
};

ChatRoom.propTypes = {
  className: PropTypes.string,
};

export default ChatRoom;
