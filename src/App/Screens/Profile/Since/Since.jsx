import React from 'react';
import markIcon from './mark.svg'
import styles from './Since.module.scss'
import PropTypes from 'prop-types';
import { parseDate } from '../../../Functions/Functions';



const Since = ({className, date}) => {
  return (
    <div className={`${styles.since} ${className}`}>
      <div className={styles.markWrapper}>
        <img className={styles.mark} src={markIcon} alt='mark'></img>
      </div>
      <p className={styles.text}>на сайте с </p>
      <time className={styles.date} dateTime={new Date(date)}>{`${parseDate(date).slice(6)}`}</time>
    </div>
  );
};


Since.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
}

export default Since;