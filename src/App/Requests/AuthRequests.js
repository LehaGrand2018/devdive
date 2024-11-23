import axios from "axios";
import qs from "qs";
import { SIGN_IN_URL, SIGN_UP_URL, REFRESH_TOKEN_URL } from "../Constants/URLs";
import GlobalStore from "../Stores/GlobalStore";
import { getUser } from "../Requests/UsersRequests";
const { setIsLoggedIn, setUsername } = GlobalStore;

export const signIn = async (email, password) => {
  const res = await axios.post(
    SIGN_IN_URL,
    qs.stringify({
      username: email,
      password,
    }),
    {
      headers: { accept: "application/json" },
    }
  );
  const data = res.data;
  console.log(data);
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  localStorage.setItem("token_type", data.token_type);
  localStorage.setItem("user_id", data.user_id);
  setIsLoggedIn("true");
  localStorage.setItem("token_refreshed_at", Date.now());

  (async () => {
    const user = await getUser(data.user_id);
    console.info("User:", user.user.username);
    setUsername(user.user.username);
  })();
};

export const signUp = async (username, password, email) => {
  const res = await axios.post(
    SIGN_UP_URL,
    { username, password, email },
    {
      headers: { accept: "application/json" },
    }
  );
  console.log(res.data);
};

export const refreshToken = async () => {
  console.log("Refresh token function called");
  const res = await axios.post(REFRESH_TOKEN_URL, null, {
    headers: {
      accept: "application/json",
      refresh: localStorage.getItem("refresh_token"),
    },
  });
  const data = res.data;
  console.log(data);
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  localStorage.setItem("token_type", data.token_type);
  setIsLoggedIn("true");
  localStorage.setItem("token_refreshed_at", Date.now());
};

export const signOut = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("token_type");
  localStorage.removeItem("user_id");
  localStorage.removeItem("token_refreshed_at");
  setIsLoggedIn("false");
};
