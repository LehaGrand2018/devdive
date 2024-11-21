import { makeAutoObservable } from "mobx";
import axios from "axios";
class GlobalStore {
  isLoggedIn =
    localStorage.getItem("isLoggedIn") !== null
      ? localStorage.getItem("isLoggedIn")
      : "false";

  username = "undef";

  setUsername = (value) => {
    this.username = value;
    console.log(this.username)
  };

  setIsLoggedIn = (value) => {
    this.isLoggedIn = value;
    localStorage.setItem("isLoggedIn", value);
  };

  fetchUser = async (userId) => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/users/${userId}`,
      null,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return res.data;
  } 
  accessToken = localStorage.getItem("accessToken");
  refreshToken = localStorage.getItem("refreshToken");

  constructor() {
    makeAutoObservable(this);
    // const user = await getUser(localStorage.getItem("user_id"));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GlobalStore();
