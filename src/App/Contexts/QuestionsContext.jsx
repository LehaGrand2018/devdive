import React, { createContext } from 'react';
import axios from 'axios';

const QuestionsContext = createContext(null);

const QuestionsProvider = ({clidren}) => {

  const object = {

    // createPosts: async ({ name, description }) => {
    //   console.log("AT: ", localStorage.getItem("access_token"));
    //   await axios.post(
    //     TAGS_URL,
    //     {
    //       name,
    //       description,
    //     },
    //     {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //       },
    //     }
    //   );
    // },

    // getPosts: async () => {
    //   try {
    //     const res = await axios.get(`${TAGS_URL}`, null, {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //       },
    //     });
    //     console.log(res.data);
    //     return res.data;
    //   } catch (error) {
    //     console.error(error);
    //     console.log(`Error code: ${error.response.status}`);
    //     console.log(`Error statusText: ${error.response.statusText}`);
    //   }
    // },

    // getPost: async (tagId) => {
    //   try {
    //     const res = await axios.get(`${TAGS_URL}${tagId}`, null, {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //       },
    //     });
    //     console.log(res.data);
    //     return res.data;
    //   } catch (error) {
    //     console.error(error);
    //     console.log(`Error code: ${error.response.status}`);
    //     console.log(`Error statusText: ${error.response.statusText}`);
    //   }
    // },

    // updatePost: async (tagId) => {
    //   try {
    //     const res = await axios.post(`${TAGS_URL}${tagId}`, null, {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //       },
    //     });
    //     console.log(res.data);
    //     return res.data;
    //   } catch (error) {
    //     console.error(error);
    //     console.log(`Error code: ${error.response.status}`);
    //     console.log(`Error statusText: ${error.response.statusText}`);
    //   }
    // },

    // deleteTag: async (tagId) => {
    //   try {
    //     const res = await axios.post(`${TAGS_URL}${tagId}`, null, {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //       },
    //     });
    //     console.log(res.data);
    //     return res.data;
    //   } catch (error) {
    //     console.error(error);
    //     console.log(`Error code: ${error.response.status}`);
    //     console.log(`Error statusText: ${error.response.statusText}`);
    //   }
    // },


  }



  return (
    <QuestionsContext.Provider value={object}>
      {clidren}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsProvider};