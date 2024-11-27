import axios from "axios";
import { CHAT_URL } from "../Constants/URLs";

export const getResentMessages = async (params) => {
  let queryURL = `${CHAT_URL}?`;
  if (params) {
    if (params.limit) {
      queryURL += `limit=${encodeURIComponent(params.limit)}&`;
    }

    if (params.offset) {
      queryURL += `offset=${encodeURIComponent(params.offset)}&`;
    }
  }

  queryURL = queryURL.endsWith("&") ? queryURL.slice(0, -1) : queryURL;

  console.log("Final query URL:", queryURL);

  try {
    const res = await axios.get(queryURL, {
      headers: {
        accept: "application/json",
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
