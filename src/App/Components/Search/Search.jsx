import React from 'react';
import styles from './Search.module.scss';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className= {styles.search}>
      <h1>Метки</h1>
      <input 
        type="text" 
        placeholder="Поиск" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};

export default Search;
