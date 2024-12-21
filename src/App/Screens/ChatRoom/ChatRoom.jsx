import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatRoom.module.scss";
import PropTypes from "prop-types";
import MessageForm from "./MessageForm/MessageForm";
import Message from "./Message/Message";
import { CHAT_WEBSOKET_URL } from "../../Constants/URLs";
import { getResentMessages } from "../../Requests/ChatRequests";
import { useTranslation } from "react-i18next";

const ChatRoom = ({ className }) => {
  const { t } = useTranslation();
  const [socket, setSocket] = useState(null);
  const [status, setStatus] = useState("Connecting...");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const socket = new WebSocket(
      `${CHAT_WEBSOKET_URL}${localStorage.getItem("user_id")}/ws`
    );
    setSocket(socket);

    socket.onopen = () => {
      console.log("Socket opened");
      setStatus(t("chatRoom.connected"));
      (async () => {
        const recentMessages = await getResentMessages({ limit: 5 });
        console.log("Recent messages:", recentMessages);
        const messagesTmp = [];
        recentMessages
          .slice()
          .reverse()
          .forEach((msg) => {
            messagesTmp.push(msg);
          });
        setMessages(messagesTmp);
      })();
    };

    socket.onmessage = (messageEvent) => {
      try {
        let dataString = messageEvent.data.replaceAll(`'`, `"`);
        const message = JSON.parse(dataString);
        console.log("Recieved message:", message);
        setMessages((prevMessages) => [...prevMessages, message]);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    socket.onerror = (event) => {
      console.log("Error event:", event);
      setStatus(t("chatRoom.error"));
    };

    socket.onclose = (closeEvent) => {
      console.log("Close event:", closeEvent);
      setStatus(t("chatRoom.disconnected"));
    };

    return () => {
      socket.close();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.chat} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.headerText}>{t("chatRoom.title")}</h2>
        <h3 className={styles.headerStatus}>
          {t("chatRoom.status")}: {status}
        </h3>
      </div>
      <div className={styles.messagesList}>
        {messages.map((msg, index) => (
          <Message className={styles.message} msg={msg} key={index} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <MessageForm
        className={styles.messageForm}
        socket={socket}
        onMessageSend={(msg) =>
          setMessages((prevMessages) => [...prevMessages, msg])
        }
      />
    </div>
  );
};

ChatRoom.propTypes = {
  className: PropTypes.string,
};

export default ChatRoom;
