import { makeAutoObservable } from "mobx";

class GlobalStore {

  isLoggedIn = localStorage.getItem("isLoggedIn") !== null ? localStorage.getItem("isLoggedIn") : "false";

  setIsLoggedIn = (value) => {
    this.isLoggedIn = value;
    localStorage.setItem("isLoggedIn", value);
  }

  accessToken = localStorage.getItem("accessToken");
  refreshToken = localStorage.getItem("refreshToken");
  

  
  constructor() {
    makeAutoObservable(this);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GlobalStore()