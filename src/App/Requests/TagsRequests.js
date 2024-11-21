import axios from "axios";
import { TAGS_URL } from "../Constants/URLs";

const object = {
  createTag: async ({ name, description }) => {
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
  },

  getTags: async () => {
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
  },

  getTag: async (tagId) => {
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
  },

  updateTag: async (tagId) => {
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
  },

  deleteTag: async (tagId) => {
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
  },
};

export default object;
