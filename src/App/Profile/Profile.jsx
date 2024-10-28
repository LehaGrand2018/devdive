import React from "react";
import User from "./User/User";
import { useEffect } from "react";
import styles from "./Profile.module.scss";
import Status from "./Status/Status";
import Since from "./Since/Since";
import TopTags from "./TopTags/TopTags";
import TopQuestions from "./TopQuestions/TopQuestions";
import PropTypes from "prop-types";

const Profile = ({ className, setIsProfile }) => {



  let user = {
    username: "neurotrier",
    description: "Информация о пользователе",
    photo: "undefined",
    reputation: 100,
    role: "admin",
    questionsCount: 35,
    answersCount: 89,
    createdAt: Date.now(),
    tags: [
      "python",
      "javascript",
      "golang",
      "ruby",
      "php",
      "jquerry",
      "rust",
      "c++",
    ],
    questions: [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo est. Lorem ipsum dolor.",
        description: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo est. Lorem ipsum dolor.",
        description: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo est. Lorem ipsum dolor.",
        description: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo est. Lorem ipsum dolor.",
        description: "",
      },

    ],
  };
useEffect(() => {
  console.log("PROFILE")
  setIsProfile("true");
  
  return () => {
    setIsProfile("false")
  }

}, [])

  return (
    <div className={`${styles.profile} ${className}`}>
      <div className={styles.userStatus}>
        <User
          className={styles.user}
          username={user.username}
          description={user.description}
        />
        <Status
          className={styles.status}
          reputation={user.reputation}
          role={user.role}
          questions={user.questionsCount}
          answers={user.answersCount}
        />
      </div>
      <Since className={styles.since} date={user.createdAt} />
      <TopTags className={styles.topTags} tags={user.tags} />
      <TopQuestions
        className={styles.topQuestions}
        questions={user.questions}
      />
    </div>
  );
};


Profile.propTypes = {
  className: PropTypes.string,
  setIsProfile: PropTypes.func,
};
export default Profile;
