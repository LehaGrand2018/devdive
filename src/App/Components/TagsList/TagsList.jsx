import React, { useState } from 'react';
import styles from './TagsList.module.scss';
import Search from '../Search/Search';
import Tag from './Tag/Tag';

const TagsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Данные для тегов
  const tags = [
    { name: '#python', description: 'Python is an programming language' },
    { name: '#JavaScript', description: 'JavaScript is an programming language' },
    { name: '#Golang', description: 'Go is an programming language' },
    { name: '#php', description: 'PHP is an programming language' },
    { name: '#Rust', description: 'Rust is an programming language' },
    { name: '#Ruby', description: 'Ruby is an programming language' }
  ];

  // Фильтрация тегов на основе поиска
  const filteredTags = tags.filter(tag => 
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.tagsList}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className={styles.tagsGrid}>
        {filteredTags.map((tag, index) => (
          <Tag key={index} name={tag.name} description={tag.description} />
        ))}
      </div>
    </div>
  );
};

export default TagsList;
