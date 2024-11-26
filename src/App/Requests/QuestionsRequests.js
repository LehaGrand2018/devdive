import axios from "axios";
import { QUESTIONS_URL } from "../Constants/URLs";

export const createQuestion = async (content, tags) => {
  const body = {
    content: content,
    user_id: localStorage.getItem("user_id"),
    tags: tags,
  };

  try {
    const res = await axios.post(`${QUESTIONS_URL}`, body, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    console.log(`Error code: ${error.response.status}`);
    console.log(`Error statusText: ${error.response.statusText}`);
  }
};

export const getQuestions = async (params) => {

  let queryURL = `${QUESTIONS_URL}?`;
  
  if (params) {
    if (params.tags && Array.isArray(params.tags) && params.tags.length > 0) {
      params.tags.forEach((tag) => {
        if (tag) {
          queryURL += `tags=${encodeURIComponent(tag)}&`;
        }
      });
    }
    if (params.content) {
      queryURL += `content=${encodeURIComponent(params.content)}&`;
    }

    if (params.user_id) {
      queryURL += `user_id=${encodeURIComponent(params.user_id)}&`;
    }
  }

  queryURL = queryURL.endsWith("&") ? queryURL.slice(0, -1) : queryURL;

  console.log("Final query URL:", queryURL);
  try {
    const res = await axios.get(queryURL, null, {
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
