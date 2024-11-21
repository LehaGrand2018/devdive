import axios from "axios";
import { TAGS_URL } from "../Constants/URLs";

export const createTag = async ({ name, description }) => {
  console.log("AT: ", localStorage.getItem("access_token"));
  await axios.post(
    TAGS_URL,
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
};

export const getTags = async () => {
  try {
    const res = await axios.get(`${TAGS_URL}`, null, {
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

export const getTag = async (tagId) => {
  try {
    const res = await axios.get(`${TAGS_URL}${tagId}`, null, {
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

export const updateTag = async (tagId) => {
  try {
    const res = await axios.post(`${TAGS_URL}${tagId}`, null, {
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

export const deleteTag = async (tagId) => {
  try {
    const res = await axios.post(`${TAGS_URL}${tagId}`, null, {
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
