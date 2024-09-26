import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ name, description }) => {
  return (
    <div className={styles.tag}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Tag;
