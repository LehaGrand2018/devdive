import { makeAutoObservable, action } from "mobx";

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

  constructor() {
    makeAutoObservable(this, {
      setIsLoggedIn: action,
      setUsername: action,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GlobalStore();
