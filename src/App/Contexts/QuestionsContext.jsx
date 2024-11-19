import React, { createContext, useContext } from "react";
import axios from "axios";
import { URLContext } from "./URLContext";

const QuestionsContext = createContext(null);

const QuestionsProvider = ({ clidren }) => {
  const { QUESTIONS_URL } = useContext(URLContext);

  const object = {
    createQuestions: async ({ name, description }) => {
      console.log("AT: ", localStorage.getItem("access_token"));
      await axios.question(
        QUESTIONS_URL,
        {
          name,
          description,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
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
        const res = await axios.question(
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
        const res = await axios.question(
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
      {clidren}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsProvider };
