import { makeAutoObservable, action } from "mobx";
import { getUser } from "../Requests/UsersRequests";
class GlobalStore {
  isLoggedIn =
    localStorage.getItem("isLoggedIn") !== null
      ? localStorage.getItem("isLoggedIn")
      : "false";

  username = null;

  setUsername = (value) => {
    this.username = value;
  };

  setIsLoggedIn = (value) => {
    this.isLoggedIn = value;
    localStorage.setItem("isLoggedIn", value);
  };
  fetchUser = async ()=> {
    const res = await getUser(localStorage.getItem("user_id"));
    const username = res.user.username;
    console.log("USERNAME:",username)
    this.username = username;
  };

  accessToken = localStorage.getItem("accessToken");
  refreshToken = localStorage.getItem("refreshToken");

  constructor() {
    makeAutoObservable(this, {
      fetchUser : action,
      setUsername: action,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GlobalStore();
