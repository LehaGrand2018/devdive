import { makeAutoObservable } from "mobx";

class GlobalStore {
  
  isLoggedIn = localStorage.getItem("isLoggedIn");

  setIsLoggedIn = (value) => {
    this.isLoggedIn = value;
    localStorage.setItem("isLoggedIn", value);
  }
  
  constructor() {
    makeAutoObservable(this);
  }
}

export default new GlobalStore()