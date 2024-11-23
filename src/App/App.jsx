import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import QuestionsList from "./Screens/QuestionsList/QuestionsList";
import Profile from "./Screens/Profile/Profile";
import AddQuestion from "./Screens/AddQuestion/AddQuestion";
import TagsList from "./Screens/TagsList/TagsList";
import QuestionAnswersList from "./Screens/QuestionAnswersList/QuestionAnswersList";
import AutorizationPage from "./Screens/AutorizationPage/AutorizationPage";
import GlobalStore from "./Stores/GlobalStore";
import Root from "./Screens/Root/Root";
import ErrorPage from "./Screens/ErrorPage/ErrorPage";
import { MenuProvider } from "./Contexts/MenuContext";
import { refreshToken } from "./Requests/AuthRequests";

const App = () => {
  const [isProfile, setIsProfile] = useState("false");
  const [isAddQuestion, setIsAddQuestion] = useState("false");
  const { isLoggedIn } = GlobalStore;

  useEffect(()=>{
    if (isLoggedIn === "true") {
      const dateLS = Number.parseInt(localStorage.getItem("token_refreshed_at"))
      const dateNow = Date.now()
      console.info("Date from local storage:", dateLS)
      console.info("Date now:", dateNow)
      if (dateNow > dateLS + 1700000) {
        refreshToken();
      }
    }
  }, [isLoggedIn])
  

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
              element={<QuestionAnswersList />}
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
