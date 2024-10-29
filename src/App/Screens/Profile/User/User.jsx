import PropTypes from "prop-types";
import React from "react";
import styles from "./User.module.scss";

const User = ({ className, username, description, photo }) => {
  return (
    <div className={`${styles.user} ${className}`}>
      <div className={styles.photo}></div>
      <div className={styles.info}>
        <h2 className={styles.username}>{username}</h2>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string.isRequired,
  description: PropTypes.string,
  photo: PropTypes.string,
};

export default User;
