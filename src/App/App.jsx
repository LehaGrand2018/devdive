import Header from './Header/Header';
import NavigationPanel from './NavigationPanel/NavigationPanel';
import PostsList from './Components/PostsList/PostsList';
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.App}>
      <Header className=''></Header>
      <div className={styles.Content}>
        <NavigationPanel></NavigationPanel>
        <PostsList></PostsList>
      </div>
    </div>
  );
}

export default App;
