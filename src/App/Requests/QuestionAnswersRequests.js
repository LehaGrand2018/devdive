import axios from "axios";
import { ANSWERS_URL } from "../Constants/URLs";

export const createAnswer = async (content, question_id) => {
  try {
    const res = await axios.post(
      `${ANSWERS_URL}?user_id=${localStorage.getItem("user_id")}`,
      {
        user_id: localStorage.getItem("user_id"),
        question_id,
        content,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return res.data
  } catch (error) {
    console.error(error);
    console.log(`Error code: ${error.response.status}`);
    console.log(`Error statusText: ${error.response.statusText}`);
  }
};

export const getAnswer = async (answerId) => {
  try {
    const res = await axios.get(`${ANSWERS_URL} ${answerId}`, null, {
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

export const updateAnswer = async (answerId, content) => {
  try {
    const res = await axios.patch(
      `${ANSWERS_URL}${answerId}`,
      {
        content,
      },
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

export const deleteAnswer = async (answerId) => {
  try {
    const res = await axios.delete(`${ANSWERS_URL}${answerId}`, null, {
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
