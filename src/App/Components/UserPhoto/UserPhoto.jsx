import React, { useEffect, useState } from "react";
import styles from "./UserPhoto.module.scss";
import { getUserPhoto } from "../../Requests/UsersRequests";
import PropTypes from "prop-types";

const UserPhoto = ({ className, userID, username }) => {
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    (async () => {
      const photo = await getUserPhoto(userID);
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
    <div
      className={`${styles.userPhoto} ${className}`}
      style={{ backgroundImage: `url(${photoURL})` }}
    >
      {!photoURL ? (
        <p className={styles.letter}>{username.slice(0, 1).toUpperCase()}</p>
      ) : null}
    </div>
  );
};

UserPhoto.propTypes = {
  className: PropTypes.string,
  userID: PropTypes.string,
  username: PropTypes.string,
};

export default UserPhoto;
