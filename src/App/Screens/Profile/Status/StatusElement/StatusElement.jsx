import PropTypes from "prop-types";
import React from "react";
import styles from './StatusElement.module.scss'

const StatusElement = ({ className, first, second }) => {
  return (
    <div className={`${styles.element} ${className}`}>
      <p className={styles.first}>{first}</p>
      <p className={styles.second}>{second}</p>
    </div>
  );
};

StatusElement.propTypes = {
  className: PropTypes.string,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
};

export default StatusElement;
