import React, { useState } from 'react';
import styles from './TagsList.module.scss';
import Search from '../Search/Search';
import Tag from './Tag/Tag';

const TagsList = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const tags = [
    { name: "python", description: "Python is an programming language" },
    {
      name: "JavaScript",
      description: "JavaScript is an programming language",
    },
    { name: "Golang", description: "Go is an programming language" },
    { name: "php", description: "PHP is an programming language" },
    { name: "Rust", description: "Rust is an programming language" },
    { name: "Ruby", description: "Ruby is an programming language" },
  ];

  // Фильтрация тегов на основе поиска
  const filteredTags = tags.filter((tag) => {
    return tag.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const elements = filteredTags.map((tag, index) => (
    <Tag key={index} value={tag.name} description={tag.description} />
  ));

  return (
    <section className={styles.tagsList}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul className={styles.tagsGrid}>{elements}</ul>
    </section>
  );
};

export default TagsList;
