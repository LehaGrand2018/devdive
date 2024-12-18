import { USERS_URL, USERS_PHOTO_URL } from "../Constants/URLs";
import axios from "axios";
import qs from "qs";

export const getUser = async (userId) => {
  const res = await axios.get(`${USERS_URL}${userId}`, null, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  console.log(res.data);
  return res.data;
};

export const getUserPhoto = async (userId) => {
  try {
    const res = await axios.get(`${USERS_PHOTO_URL}${userId}`, {
      headers: {
        Accept: "application/json",
      },
      responseType: "blob",
    });
    console.log("Res:", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, image, username, info) => {
  const res = await axios.post(
    `${USERS_URL}${userId}`,
    qs.stringify({
      image,
      username,
      info,
    }),
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  console.log(res.data);
  return res.data;
};

export const deleteUser = async (userId) => {
  const res = await axios.delete(`${USERS_URL}${userId}`, null, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  console.log(res.data);
  return res.data;
};

export const updateUserPolicies = async (userId, isBanned = "false", role) => {
  const res = await axios.post(
    `${USERS_URL}${userId}`,
    {
      is_banned: isBanned,
      role,
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
};
