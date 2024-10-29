import PropTypes from "prop-types";
import React from "react";
import styles from './TopTags.module.scss'


const TopTags = ({ className, tags }) => {

  const elements = tags.map((tag, index) => {
    return <p key={index} className={styles.tag}>{`#${tag}`}</p>;
  });

  return (
     <div className={`${styles.top} ${className}`}>
      <h2 className={styles.header}>Топ меток</h2>
      <div className={styles.tags}>
        {elements}
      </div>
    </div>
  );
};


TopTags.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.array.isRequired,
}

export default TopTags;
