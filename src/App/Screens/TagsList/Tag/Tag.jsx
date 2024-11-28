import React from 'react';
import styles from './Tag.module.scss';
import { useNavigate } from 'react-router-dom';

const Tag = ({ value, description, className}) => {
  const navigate = useNavigate();
  const goToQuestionsWithTag = () => {
    navigate(`../questions?tags=${value}`)
  }

  return (
    <div className={`${styles.tag} ${className}`} onClick={goToQuestionsWithTag}>
      <h2 className={styles.header}>{'#' + value}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Tag;
