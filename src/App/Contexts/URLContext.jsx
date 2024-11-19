import React, { createContext, } from 'react';

const URLContext = createContext(null);


const URLProvider = ({children}) => {

  const BASE_URL = "http://localhost:8000"
  const urls = {
    BASE_URL,
    SIGN_IN_URL: `${BASE_URL}/api/v1/auth/signin/`,
    SIGN_UP_URL: `${BASE_URL}/api/v1/auth/signup/`,
    REFRESH_TOKEN_URL: `${BASE_URL}/api/v1/auth/refresh-token/`,

    TAGS_URL: `${BASE_URL}/api/v1/tags/`,
    USERS_URL: `${BASE_URL}/api/v1/users/`,
  }

  return (
    <URLContext.Provider value={urls}>
      {children}
    </URLContext.Provider>
  );
};

export { URLProvider, URLContext };