import { USERS_URL, USERS_PHOTO_URL } from "../Constants/URLs";
import axios from "axios";

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
    // console.log("Res:", res.data);
    return res.data;
  } catch (error) {
    if (error.response.status === 404) {
      console.log(`User ${userId} do not have a profile photo`);
      return;
    }
    console.log(error);
  }
};

export const updateUser = async (userId, formData) => {
  const res = await axios.patch(`${USERS_URL}${userId}`, formData, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
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
