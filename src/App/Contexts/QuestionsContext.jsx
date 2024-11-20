import React, { createContext, useContext } from "react";
import axios from "axios";
import { URLContext } from "./URLContext";

const QuestionsContext = createContext(null);

const QuestionsProvider = ({ children }) => {
  const { QUESTIONS_URL } = useContext(URLContext);

  const object = {
    createQuestion: async (content, tags) => {
      console.log("tags")
      console.log(tags)
      const body = {
        content: content,
        user_id: localStorage.getItem("user_id"),
        tags: tags,
      }
      console.log("Body");
      console.log(body)

      try {
        await axios.post(
          `${QUESTIONS_URL}`,
          body,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
      } catch (error) {
        console.error(error);
        console.log(`Error code: ${error.response.status}`);
        console.log(`Error statusText: ${error.response.statusText}`);
      }
     
    },

    getQuestions: async () => {
      try {
        const res = await axios.get(`${QUESTIONS_URL}`, null, {
          headers: {
            Accept: "application/json",
          },
        });
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
        console.log(`Error code: ${error.response.status}`);
        console.log(`Error statusText: ${error.response.statusText}`);
      }
    },

    getQuestion: async (questionId) => {
      try {
        const res = await axios.get(`${QUESTIONS_URL}${questionId}`, null, {
          headers: {
            Accept: "application/json",
          },
        });
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
        console.log(`Error code: ${error.response.status}`);
        console.log(`Error statusText: ${error.response.statusText}`);
      }
    },

    updateQuestion: async (questionId, content) => {
      try {
        const res = await axios.post(
          `${QUESTIONS_URL}${questionId}`,
          { content },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
        console.log(`Error code: ${error.response.status}`);
        console.log(`Error statusText: ${error.response.statusText}`);
      }
    },

    deleteQuestion: async (questionId) => {
      try {
        const res = await axios.delete(
          `${QUESTIONS_URL}${questionId}`,
          null,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
        console.log(`Error code: ${error.response.status}`);
        console.log(`Error statusText: ${error.response.statusText}`);
      }
    },
  };

  return (
    <QuestionsContext.Provider value={object}>
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsProvider };
