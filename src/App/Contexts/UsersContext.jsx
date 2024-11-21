import React, { createContext, useContext } from "react";
import { URLContext } from "./URLContext";
import axios from "axios";
import qs from 'qs';

const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const { USERS_URL } = useContext(URLContext);
  const object = {
    getUser: async (userId) => {
      const res = await axios.get(`${USERS_URL}${userId}`, null, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(res.data)
      return res.data;
    },

    updateUser: async (userId, image, username, info) => {
      const res = await axios.post(`${USERS_URL}${userId}`,
        qs.stringify({
          image,
          username,
          info
        }),
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      console.log(res.data)
      return res.data;
    },

    deleteUser: async (userId) => {
      const res = await axios.delete(`${USERS_URL}${userId}`, null, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(res.data)
      return res.data;
    },

    updateUserPolicies: async (userId, isBanned = "false", role) => {
      const res = await axios.post(`${USERS_URL}${userId}`, {
        "is_banned": isBanned,
        role
      }, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(res.data)
      return res.data;
    },
  };

  return (
    <UsersContext.Provider value={object}>{children}</UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
