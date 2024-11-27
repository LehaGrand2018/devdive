import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatRoom.module.scss";
import PropTypes from "prop-types";
import MessageForm from "./MessageForm/MessageForm";
import Message from "./Message/Message";
import { CHAT_WEBSOKET_URL } from "../../Constants/URLs";
import { getResentMessages } from "../../Requests/ChatRequests";

const ChatRoom = ({ className }) => {
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

    // (async()=>{
    //   const recentMessages = await getResentMessages({limit: 50});
    //   console.log("Recent messages:", recentMessages);
    //   const messagesTmp = [];
    //   recentMessages.forEach(msg => {
    //     messagesTmp.push({
    //       data: msg.message,
    //       user_id: msg.user.id,
    //       username: msg.user.username,
    //       created_at: msg.created_at,
    //     })
    //   });
    //   setMessages(messagesTmp)
    //   // data user_id username created_at
    // })()

    const socket = new WebSocket(
      `${CHAT_WEBSOKET_URL}${localStorage.getItem("user_id")}/ws`
    );
    setSocket(socket);

    socket.onopen = () => {
      console.log("Socket opened");
      setStatus("Connected");
      (async()=>{
        const recentMessages = await getResentMessages({limit: 50});
        console.log("Recent messages:", recentMessages);
        const messagesTmp = [];
        recentMessages.forEach(msg => {
          messagesTmp.push({
            data: msg.message,
            user_id: msg.user.id,
            username: msg.user.username,
            created_at: msg.created_at,
          })
        });
        setMessages(messagesTmp)
        // data user_id username created_at
      })()
    };

    socket.onmessage = (messageEvent) => {
      try {
        const dataString = messageEvent.data.replaceAll(`'`, `"`);
        const message = JSON.parse(dataString);
        console.log("Recieved message:", message)
        setMessages((prevMessages) => [...prevMessages, message]);
        
      } catch (error) {
        console.error("Error parsing message:", error);
      }
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

  return (
    <div className={`${styles.chat} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.headerText}>Чат комната</h2>
        <h3 className={styles.headerStatus}>Status: {status}</h3>
      </div>
      <div className={styles.messagesList}>
        {messages.map((msg, index) => (
          <Message
            className={styles.message}
            msg={msg}
            key={index}
          />
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
