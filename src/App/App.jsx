import styles from "./App.module.scss";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header/Header";
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import PostsList from "./Screens/PostsList/PostsList";
import Profile from "./Screens/Profile/Profile";
import AddPost from "./Screens/AddPost/AddPost";
import TagsList from "./Screens/TagsList/TagsList"
import PostCommentsList from "./Screens/PostCommentsList/PostCommentsList";
import AutorizationPage from "./Screens/AutorizationPage/AutorizationPage";
import GlobalStore from "./Stores/GlobalStore";
import Root from "./Screens/Root/Root"
import ErrorPage from "./Screens/ErrorPage/ErrorPage";
import { MenuProvider } from "./Contexts/MenuContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { URLProvider } from "./Contexts/URLContext";
import { TagsProvider } from "./Contexts/TagsContext";


const App = () => {

  const [isProfile, setIsProfile] = useState("false")
  const [isAddPost, setIsAddPost] = useState("false")
  // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
  
  const {isLoggedIn} = GlobalStore;


  return (
    <URLProvider>
      <AuthProvider>
        <MenuProvider>
          <div className={styles.app}>
            <div className={styles.content}>
              <Header className={styles.header} isProfile={isProfile} setIsProfile={setIsProfile} isAddPost={isAddPost} setIsAddPost={setIsAddPost}></Header>
              <NavigationPanel setIsAddPost={setIsAddPost} isLoggedIn={isLoggedIn}></NavigationPanel>
              <Routes>
                <Route path="/" element={<Root/>}></Route>
                <Route path="/posts" element={<PostsList />} />
                <Route path="posts/:postId" element={<PostCommentsList />} />
                <Route path="/addPost" element={<AddPost setIsAddPost={setIsAddPost} />} />
                <Route path="/tags" element={<TagsProvider><TagsList /></TagsProvider>} />
                <Route path="/profile" element={<Profile setIsProfile ={setIsProfile}/>} ></Route>
                <Route path="/autorization" element={<AutorizationPage />}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
              </Routes>
            </div>
          </div>
        </MenuProvider>
      </AuthProvider>
    </URLProvider>
  );
};

export default App;
