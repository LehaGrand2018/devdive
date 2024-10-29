import {React, useState} from 'react';
import styles from './TagsHeader.module.scss'
import Search from '../../../Components/Search/Search';



const TagsHeader = ({searchTerm, setSearchTerm, className}) => {


    const [searchValue, setSearchValue] = useState();

    return (
        <div className={`${styles.tagsHeader} ${className}`}>
            <h1 className={styles.title}>Метки</h1>
            <Search
                className={styles.search}
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                // onChange={(event) => setSearchValue(event.target.value)}
                onChange={(event) => setSearchTerm(event.target.value)}
                onClick={(event) => setSearchTerm(searchValue)}
            ></Search>
        </div>
    );
};

export default TagsHeader;