import React, { useState, useEffect } from "react";
import User from "./User/User";
import { useTranslation } from "react-i18next";
import styles from "./Profile.module.scss";
import Status from "./Status/Status";
import Since from "./Since/Since";
import TopTags from "./TopTags/TopTags";
import TopQuestions from "./TopQuestions/TopQuestions";
import PropTypes from "prop-types";
import { getUser } from "../../Requests/UsersRequests";
import { useParams } from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile";

const Profile = ({ className }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [elements, setElements] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { userId } = useParams();

  // Получение данных о пользователе
  useEffect(() => {
    (async () => {
      const user = await getUser(userId);
      setUser(user);
    })();
  }, [userId]);

  // Отображение данных о пользователе
  useEffect(() => {
    if (user) {
      const userGenteralInfo = user.user;
      setElements(
        <>
          <div className={styles.userStatus}>
            <User
              className={styles.user}
              username={userGenteralInfo.username}
              description={userGenteralInfo.info}
              id={userGenteralInfo.id}
            />
            <Status
              className={styles.status}
              reputation={userGenteralInfo.reputation}
              role={userGenteralInfo.role}
              questions={user.total_questions}
              answers={user.total_answers}
            />
          </div>
          <Since className={styles.since} date={userGenteralInfo.created_at} />
          <TopTags className={styles.topTags} tags={user.tags} />
          <TopQuestions
            className={styles.topQuestions}
            questions={user.questions}
          />
          {user.user.id === localStorage.getItem("user_id") && (
            <button
              className={styles.editButton}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {t("profile.editProfile.editProfile")}
            </button>
          )}
        </>
      );
    }
  }, [user]);

  return (
    <div className={`${styles.profile} ${className}`}>
      {elements}
      {isModalOpen && user && (
        <EditProfile
          className={styles.editProfile}
          user={user}
          setUser={setUser}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
