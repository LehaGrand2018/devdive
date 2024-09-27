import {
  RouterProvider,
} from "react-router-dom";
import router from '../Router/router';

import Header from './Header/Header';
import NavigationPanel from './NavigationPanel/NavigationPanel';
import PostsList from './Components/PostsList/PostsList';
import styles from './App.module.scss'


const App = () => {
  // console.log('create')
  return (
    <div className={styles.App}>
      <Header className={styles.Header}></Header>
      <div className={styles.Content}>
        <NavigationPanel></NavigationPanel>
        {/* <PostsList></PostsList> */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
