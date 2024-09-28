import {
  RouterProvider,
} from "react-router-dom";
import router from '../Router/router';
import Header from './Header/Header';
import NavigationPanel from './NavigationPanel/NavigationPanel';
import PostsList from './PostsList/PostsList';
import styles from './App.module.scss'

import Input from "./Components/Input/Input";
import PasswordInput from "./Components/PasswordInput/PasswordInput";



const App = () => {
  // console.log('create')
  return (
    <div className={styles.app}>
      <Header className={styles.header}></Header>
      <div className={styles.content}>
        <NavigationPanel></NavigationPanel>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
