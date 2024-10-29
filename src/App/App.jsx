import styles from "./App.module.scss";
import { Route,Routes, useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";


import Header from "./Components/Header/Header";
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import PostsList from "./Screens/PostsList/PostsList";
import Profile from "./Screens/Profile/Profile";
import AddPost from "./Screens/AddPost/AddPost";
import TagsList from "./Screens/TagsList/TagsList"
import PostCommentsList from "./Screens/PostCommentsList/PostCommentsList";
import AutorizationPage from "./Screens/AutorizationPage/AutorizationPage";
import GlobalStore from "./Stores/GlobalStore";
import { observer } from "mobx-react-lite";

const App = observer(() => {

  const [isProfile, setIsProfile] = useState("false")
  const [isAddPost, setIsAddPost] = useState("false")
  // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
  
  const {isLoggedIn} = GlobalStore;
  
  const Root = () => {
    
    const navigate = useNavigate()
    useEffect(() => {
      if (isLoggedIn === "false"){
        navigate("/autorization")
      }
      if( isLoggedIn === "true")
      navigate("/posts")
    // eslint-disable-next-line
    }, [isLoggedIn])

    return (
      <></>
    );
  };
  



  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header className={styles.header} isProfile={isProfile} setIsProfile={setIsProfile} isAddPost={isAddPost} setIsAddPost={setIsAddPost}></Header>
        <NavigationPanel setIsAddPost={setIsAddPost} isLoggedIn={isLoggedIn}></NavigationPanel>
        {/* сюда надо вставить страницы */}
        
        <Routes>
          <Route path="/" element={<Root/>}></Route>
          <Route path="/posts" element={<PostsList />} />
          <Route path="posts/:postId" element={<PostCommentsList />} />
          <Route path="/addPost" element={<AddPost setIsAddPost={setIsAddPost} />} />
          <Route path="/tags" element={<TagsList />} />
          <Route path="/profile" element={<Profile setIsProfile ={setIsProfile}/>} ></Route>
          <Route path="/autorization" element={<AutorizationPage />}></Route>
        </Routes>
      </div>
    </div>
  );
});

export default App;
