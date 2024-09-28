import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ value, description, className}) => {
  return (
    <div className={`${styles.tag} ${className}`}>
      <h2 className={styles.header}>{'#' + value}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Tag;
