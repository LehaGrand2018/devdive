import React, { useState, useEffect } from 'react';
import styles from './ErrorPage.module.scss';
import PropTypes from 'prop-types';

const ErrorPage = ({className}) => {
  // eslint-disable-next-line
  const [code, setCode] = useState(404);

  useEffect(()=>{

  }, [])
  return (
    <div className={`${styles.ErrorPage} ${className}`}>
      <h2 className={styles.header}>Oops, something went wrong...</h2>
      <h2 className={styles.errorCode}>{code}</h2>
      <h3 className={styles.errorLable}>Error</h3>
    </div>
  );
};

ErrorPage.propTypes = {
  className: PropTypes.string,
}

export default ErrorPage;