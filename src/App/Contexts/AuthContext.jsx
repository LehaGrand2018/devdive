import axios from "axios";
import qs from "qs";
import React, { createContext, useContext, useState } from "react";
import { URLContext } from "./URLContext";
import GlobalStore from "../Stores/GlobalStore";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { setIsLoggedIn } = GlobalStore;
  const { SIGN_IN_URL, SIGN_UP_URL, REFRESH_TOKEN_URL } =
    useContext(URLContext);

  const session = {
    user: {
      login: "undefined",
      password: "undefined",
      email: "undefined",
      jwtToken: "undefined",
      accessToken: "undefined",
      refresh_token: "undefined",
      token_type: "Bearer",
    },

    signIn: async (email, password) => {
      console.log("SignIn function called");

      console.log("Request data: ", {
        username: email,
        password,
      });

      const res = await axios.post(
        SIGN_IN_URL,
        qs.stringify({
          username: email,
          password,
        }),
        {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        }
      );
      const data = res.data;
      console.log(data);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("token_type", data.token_type);
      setIsLoggedIn("true");
    },

    signUp: async (username, password, email) => {
      console.log("SignUp function called");

      const res = await axios.post(
        SIGN_UP_URL,
        { username, password, email },
        {
          accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      console.log(res.data);
    },

    refreshToken: () => {
      console.log("Refresh token function called");
      const data = axios.post(REFRESH_TOKEN_URL, null, {
        accept: "application/json",
        refresh: localStorage.getItem("refresh_token"),
      });
      data
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          localStorage.setItem("token_type", data.token_type);
          setIsLoggedIn("true");
        });
    },

    signOut: () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("token_type");
      setIsLoggedIn("false");
    },
  };

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
