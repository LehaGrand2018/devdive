import React, { useEffect, useState } from "react";
import styles from "./EditProfile.module.scss";
import { updateUser, getUser } from "../../../Requests/UsersRequests";
import PropTypes from "prop-types";
import Input from "../../../Components/Input/Input";
import { useTranslation } from "react-i18next";

const EditProfile = ({ className, user, setUser, setIsModalOpen }) => {
  const [username, setUsername] = useState(user.user.username);
  const [info, setInfo] = useState(user.user.info);
  const [image, setImage] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Username:", username);
    console.log("Info:", info);
    console.log("Image:", image);
  }, [username, info, image]);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };
  const handleInfoChange = (e) => {
    const { value } = e.target;
    setInfo(value);
  };
  const handleImageChange = (e) => {
    const { files } = e.target;
    console.log(files);
    setImage(files[0]);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("info", info);
    if (image) {
      formData.append("image", image);
    }
    try {
      await updateUser(user.user.id, formData);
    } catch (error) {
      console.error(error);
    }
    try {
      const updatedUser = await getUser(user.user.id);
      setUser(updatedUser);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${styles.editProfile} ${className}`}>
      <div className={styles.modalContent}>
        <h2 className={styles.header}>
          {t("profile.editProfile.editProfile")}
        </h2>
        <label className={styles.label} htmlFor="username">
        {t("profile.editProfile.username")}
        </label>
        <Input
          className={styles.input}
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label className={styles.label} htmlFor="description">
          {t("profile.editProfile.info")}
        </label>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="description"
          id="description"
          value={info}
          onChange={handleInfoChange}
        />
        <label className={styles.label} htmlFor="image">
          {t("profile.editProfile.image")}
        </label>
        <input
          className={styles.inputFile}
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
        />
        <div className={styles.modalActions}>
          <button onClick={handleSave} className={styles.saveButton}>
            {t("profile.editProfile.save")}
          </button>
          <button onClick={closeModal} className={styles.cancelButton}>
            {t("profile.editProfile.cancel")}
          </button>
        </div>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  setUser: PropTypes.func,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

export default EditProfile;
