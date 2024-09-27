import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ value, description, className}) => {
  return (
    <div className={`${styles.tag} ${className}`}>
      <h2>{'#' + value}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Tag;
