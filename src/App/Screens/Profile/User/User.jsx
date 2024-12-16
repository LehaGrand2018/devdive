import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./User.module.scss";
import { getUserPhoto } from "../../../Requests/UsersRequests";

const User = ({ className, username, description, photo, id }) => {
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    (async () => {
      const photo = await getUserPhoto(id);
      console.log("Photo", photo);
      if (photo) {
        console.log("PHOTO");
        const url = photo ? URL.createObjectURL(photo) : null;
        console.log("PhotoURL:", url);
        setPhotoURL(url);
      }
    })();
    return () => {
      if (photoURL) {
        URL.revokeObjectURL(photoURL);
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${styles.user} ${className}`}>
      <div
        className={`${styles.photo}`}
        style={{ backgroundImage: `url(${photoURL})` }}
      >
        {!photoURL ? (
          <p className={styles.letter}>{username.slice(0, 1).toUpperCase()}</p>
        ) : null}
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
