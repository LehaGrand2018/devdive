import React from 'react';
import styles from './Search.module.scss';

const Search = ({searchTerm, setSearchTerm, className}) => {
  return (
    <div className= {`${styles.search} ${className}`}>
      <h1 className={styles.title}>Метки</h1>
      <input
        className={styles.input}
        type="text" 
        placeholder="Поиск" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};

export default Search;
