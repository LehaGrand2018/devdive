import Header from './Header/Header';
import NavigationPanel from './NavigationPanel/NavigationPanel';
import styles from './App.module.scss'
import TagsList from './Components/TagsList/TagsList';

const Tags = () => {
  return (
    <div className={styles.App}>
      <Header className=''></Header>
      <div className={styles.Content}>
        <NavigationPanel></NavigationPanel>
        <TagsList></TagsList>
      </div>
    </div>
  );
}

export default Tags;