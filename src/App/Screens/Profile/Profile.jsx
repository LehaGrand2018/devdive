import React, { useState } from "react";
import User from "./User/User";
import { useEffect } from "react";
import styles from "./Profile.module.scss";
import Status from "./Status/Status";
import Since from "./Since/Since";
import TopTags from "./TopTags/TopTags";
import TopQuestions from "./TopQuestions/TopQuestions";
import PropTypes from "prop-types";
import { getUser, getUserPhoto } from "../../Requests/UsersRequests";
import { useParams } from "react-router-dom";

const Profile = ({ className }) => {
  const [user, setUser] = useState(null);

  const [elements, setElements] = useState(null);
  const { userId } = useParams();
  // get data about user
  useEffect(() => {
    (async () => {
      const user = await getUser(userId);
      setUser(user);
    })();
  }, [userId]);

  // display data about user
  useEffect(() => {
    console.log("displayEffect");
    if (user) {
      const userGenteralInfo = user.user;
      console.log(user.presigned_url);
      setElements(
        <>
          <div className={styles.userStatus}>
            <User
              className={styles.user}
              username={userGenteralInfo.username}
              description={userGenteralInfo.info}
              // photo={userPhoto}
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
        </>
      );
    }
  }, [user]);

  return <div className={`${styles.profile} ${className}`}>{elements}</div>;
};

Profile.propTypes = {
  className: PropTypes.string,
};
export default Profile;
