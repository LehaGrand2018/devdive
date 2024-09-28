import React from 'react';
import styles from './Search.module.scss';
import searchIcon from './search.svg'


const Search = (props) => {
    return (
        <div className={`${styles.search } ${props.className}`}>
            <input className={styles.field} placeholder={props.placeholder} type={props.type} name={props.name} id={props.id} onChange={props.onChange}/>
            <img className={styles.button} onClick={props.onClick} src={searchIcon} alt={'search'}/>
        </div>
    );
};

export default Search;