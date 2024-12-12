export const BASE_URL = `${import.meta.env.REACT_APP_BACKEND_HOSTNAME}:${import.meta.env.REACT_APP_BACKEND_PORT}`;
console.log("BASE_URL", BASE_URL)
export const SIGN_IN_URL = `${BASE_URL}/api/v1/auth/signin/`;
export const SIGN_UP_URL = `${BASE_URL}/api/v1/auth/signup/`;
export const REFRESH_TOKEN_URL = `${BASE_URL}/api/v1/auth/refresh-token/`;

export const TAGS_URL = `${BASE_URL}/api/v1/tags/`;
export const USERS_URL = `${BASE_URL}/api/v1/users/`;
export const QUESTIONS_URL = `${BASE_URL}/api/v1/questions/`;
export const ANSWERS_URL = `${BASE_URL}/api/v1/answers/`;
export const VOTES_URL = `${BASE_URL}/api/v1/votes/`;
export const CHAT_URL = `${BASE_URL}/api/v1/chat/`;
export const CHAT_WEBSOKET_URL = `${BASE_URL.replace('http', 'ws')}/api/v1/chat/`;
