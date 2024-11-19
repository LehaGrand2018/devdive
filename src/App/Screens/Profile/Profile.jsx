import React, { useContext, useState } from "react";
import User from "./User/User";
import { useEffect } from "react";
import styles from "./Profile.module.scss";
import Status from "./Status/Status";
import Since from "./Since/Since";
import TopTags from "./TopTags/TopTags";
import TopQuestions from "./TopQuestions/TopQuestions";
import PropTypes from "prop-types";
import { UsersContext } from "../../Contexts/UserContext";

const Profile = ({ className, setIsProfile }) => {

  // const response = {
  //   user: {
  //     id: "3a729c0c-8c95-4d54-85a6-37356c33befd",
  //     username: "leha0501",
  //     info: "JavaScript developher",
  //     email: "leha0501@gmail.com",
  //     reputation: 0,
  //   },
  //   questions: [],
  //   answers: [],
  //   tags: [],
  //   presigned_url:
  //     "http://minio:9000/images/3a729c0c-8c95-4d54-85a6-37356c33befd/?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20241119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241119T150658Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=c858af5ad422d10f343755917524b86043a74516c12418bfa8f9673b3fde0977",
  // };

  const { getUser } = useContext(UsersContext);
  const [user, setUser] = useState(null);
  const [elements, setElements] = useState(null);

  //get data about user
  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getUser(localStorage.getItem("user_id"));

      setUser(user);
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // display data about user
  useEffect(() => {
    console.log("displayEffect")
    if (user) {
      const userGenteralInfo = user.user;
      setElements(
        <>
          <div className={styles.userStatus}>
            <User
              className={styles.user}
              username={userGenteralInfo.username}
              description={userGenteralInfo.info}
            />
            <Status
              className={styles.status}
              reputation={userGenteralInfo.reputation}
              role={userGenteralInfo.role}
              questions={user.questions.length}
              answers={user.answers.length}
            />
          </div>
          <Since className={styles.since} date={user.created_at} />
          <TopTags className={styles.topTags} tags={user.tags} />
          <TopQuestions
            className={styles.topQuestions}
            questions={user.questions}
          />
        </>
      );
    }
  }, [user]);

  useEffect(() => {
    setIsProfile("true");
    return () => {
      setIsProfile("false");
    };
  });

  return <div className={`${styles.profile} ${className}`}>{elements}</div>;
};

Profile.propTypes = {
  className: PropTypes.string,
  setIsProfile: PropTypes.func,
};
export default Profile;
