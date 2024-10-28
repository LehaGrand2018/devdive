import { BrowserRouter, NavLink, Route, RouterProvider, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import router from "../Router/router";
import Header from "./Header/Header";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import PostsList from "./PostsList/PostsList";
import styles from "./App.module.scss";

import Input from "./Components/Input/Input";
import PasswordInput from "./Components/PasswordInput/PasswordInput";
import Profile from "./Profile/Profile";
import Post from "./PostsList/Post/Post";
import AddPost from "./AddPost/AddPost";
import Tags from "./NavigationPanel/Tags/Tags";
import TagsList from "./TagsList/TagsList"

import PostCommentsList from "./PostCommentsList/PostCommentsList";

const App = () => {

  const [isProfile, setIsProfile] = useState("false")
  const [isAddPost, setIsAddPost] = useState("false")

  
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header className={styles.header} isProfile={isProfile} setIsProfile={setIsProfile} isAddPost={isAddPost} setIsAddPost={setIsAddPost}></Header>
        <NavigationPanel></NavigationPanel>
        {/* сюда надо вставить страницы */}
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="posts/:postId" element={<PostCommentsList />} />
          <Route path="/addPost" element={<AddPost setIsAddPost={setIsAddPost} />} />
          <Route path="/tags" element={<TagsList />} />
          <Route path="/profile" element={<Profile setIsProfile ={setIsProfile}/>} ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
