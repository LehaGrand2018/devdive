import axios from "axios";
import { QUESTIONS_URL } from "../Constants/URLs";

export const createQuestion = async (content, tags) => {
  console.log("tags");
  console.log(tags);
  const body = {
    content: content,
    user_id: localStorage.getItem("user_id"),
    tags: tags,
  };
  console.log("Body");
  console.log(body);

  try {
    await axios.post(`${QUESTIONS_URL}`, body, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  } catch (error) {
    console.error(error);
    console.log(`Error code: ${error.response.status}`);
    console.log(`Error statusText: ${error.response.statusText}`);
  }
};

export const getQuestions = async () => {
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
};

export const getQuestion = async (questionId) => {
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
};

export const updateQuestion = async (questionId, content) => {
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
};

export const deleteQuestion = async (questionId) => {
  try {
    const res = await axios.delete(`${QUESTIONS_URL}${questionId}`, null, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    console.log(`Error code: ${error.response.status}`);
    console.log(`Error statusText: ${error.response.statusText}`);
  }
};
