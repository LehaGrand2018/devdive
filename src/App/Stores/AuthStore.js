import { makeAutoObservable } from "mobx";

class AuthStore {

  user = {
    login: "undefined",
    password: "undefined",
    email: "undefined",
    jwtToken: "undefined",
    accessToken: "undefined",
    refresh_token:"undefined",
    token_type: "Bearer"
  }

  session = {
    user : {
      login: "undefined",
      password: "undefined",
      email: "undefined",
      jwtToken: "undefined",
      accessToken: "undefined",
      refresh_token:"undefined",
      token_type: "Bearer"
    },
    signIn: (email, password) => {
      
    },
    signUp: (username, email, password) => {

    },
  }

  signIn = (email, password) => {
    
  }

  signUp = (username, email, password) => {

  }
  constructor() {
    makeAutoObservable(this);
  }
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthStore();