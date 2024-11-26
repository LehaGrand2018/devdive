import axios from "axios";
import { VOTES_URL } from "../Constants/URLs";

export const createUpvote = async (source_id) => {

    const res = await axios.post(`${VOTES_URL}upvote/`,
      {
        source_id,
        user_id: localStorage.getItem("user_id")
      }, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return res.data;
};

export const createDownvote = async (source_id) => {

    const res = await axios.post(`${VOTES_URL}downvote/`,
      {
        source_id,
        user_id: localStorage.getItem("user_id")
      }, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return res.data;

};

export const getUpvote = async (source_id) => {
  try {
    const res = await axios.get(`${VOTES_URL}upvote/${source_id}`, null, {
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

export const getDownvote = async (source_id) => {
  try {
    const res = await axios.get(`${VOTES_URL}downvote/${source_id}`, null, {
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

export const deleteUpvotes = async (source_id) => {
  try {
    const res = await axios.delete(`${VOTES_URL}upvotes/${source_id}`, null, {
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

export const deleteDownvotes = async (source_id) => {
  try {
    const res = await axios.delete(`${VOTES_URL}downvotes/${source_id}`, null, {
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
