const BASE_URL = "http://localhost:8000"
const urls = {
  BASE_URL,
  SIGN_IN_URL: `${BASE_URL}/api/v1/auth/signin/`,
  SIGN_UP_URL: `${BASE_URL}/api/v1/auth/signup/`,
  REFRESH_TOKEN_URL: `${BASE_URL}/api/v1/auth/refresh-token/`,

  TAGS_URL: `${BASE_URL}/api/v1/tags/`,
  USERS_URL: `${BASE_URL}/api/v1/users/`,
  QUESTIONS_URL: `${BASE_URL}/api/v1/questions/`,
}

export default urls;