import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styles from "./User.module.scss";
import axios from "axios";

const User = ({ className, username, description, photo }) => {


  useEffect( ()=>{
  ( async ()=>{
    console.log("Photo link:", photo)
    console.log("Username:", username.slice(0,1).toUpperCase())
    // const res = await axios.get(photo)
  })();
  // eslint-disable-next-line
  }, [])

  return (
    <div className={`${styles.user} ${className}`}>
      <div className={`${styles.photo}`} style={{ backgroundImage: `url(${photo})` }}>
        <p className={styles.letter}>{username.slice(0,1).toUpperCase()}</p>
      </div>
      {/* <img className={styles.photo} src={photo} alt="UserPhoto"></img> */}
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
