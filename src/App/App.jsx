import styles from './App.module.css'
import Header from './Header/Header';
import NavigationPanel from './NavigationPanel/NavigationPanel';


const App = () => {
  return (
    <div className={styles.App}>
      <Header className=''></Header>
      <NavigationPanel></NavigationPanel>
    </div>
  );
}

export default App;
