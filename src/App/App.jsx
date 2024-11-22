import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header/Header";
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import QuestionsList from "./Screens/QuestionsList/QuestionsList";
import Profile from "./Screens/Profile/Profile";
import AddQuestion from "./Screens/AddQuestion/AddQuestion";
import TagsList from "./Screens/TagsList/TagsList";
import QuestionCommentsList from "./Screens/QuestionCommentsList/QuestionCommentsList";
import AutorizationPage from "./Screens/AutorizationPage/AutorizationPage";
import GlobalStore from "./Stores/GlobalStore";
import Root from "./Screens/Root/Root";
import ErrorPage from "./Screens/ErrorPage/ErrorPage";
import { MenuProvider } from "./Contexts/MenuContext";

const App = () => {
  const [isProfile, setIsProfile] = useState("false");
  const [isAddQuestion, setIsAddQuestion] = useState("false");

  const { isLoggedIn } = GlobalStore;

  return (
    <MenuProvider>
      <div className={styles.app}>
        <div className={styles.content}>
          <Header
            className={styles.header}
            isProfile={isProfile}
            setIsProfile={setIsProfile}
            isAddQuestion={isAddQuestion}
            setIsAddQuestion={setIsAddQuestion}
          ></Header>
          <NavigationPanel
            setIsAddQuestion={setIsAddQuestion}
            isLoggedIn={isLoggedIn}
          ></NavigationPanel>
          <Routes>
            <Route path="/" element={<Root />}></Route>
            <Route path="questions" element={<QuestionsList />} />
            <Route
              path="questions/:questionId"
              element={<QuestionCommentsList />}
            />
            <Route
              path="/addQuestion"
              element={<AddQuestion setIsAddQuestion={setIsAddQuestion} />}
            />
            <Route path="/tags" element={<TagsList />} />
            <Route
              path="/profile"
              element={<Profile setIsProfile={setIsProfile} />}
            ></Route>
            <Route path="/autorization" element={<AutorizationPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </div>
    </MenuProvider>
  );
};

export default App;
