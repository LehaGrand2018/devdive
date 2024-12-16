import PropTypes from "prop-types";
import React, { useState } from "react";
import minusIcon from "./minusIcon.svg";
import plusIcon from "./plusIcon.svg";
import { createUpvote, createDownvote } from "../../../../Requests/VotesRequests";
import styles from "./Votes.module.scss";


const Votes = ({ className, rating, sourceId }) => {
  const [votes, setVotes] = useState(rating);

  const increaseVotes = async () => {
      try {
        const res = await createUpvote(sourceId);
        console.log("SourceID:", sourceId);
        if (res) {
          setVotes(votes + 1);

        }
      } catch (error) {
        console.error(error);
        console.log(`Error code: ${error.response.status}`);
        console.log(`Error statusText: ${error.response.statusText}`);
        if (error.response.status === 400) {
          
        }
      }
  };

  const decreaseVotes = async () => {
      try {
        const res = await createDownvote(sourceId);
        console.log(res)
        setVotes(votes-1);
      } catch (error) {
        console.error(error);
        console.log(`Error code: ${error.response.status}`);
        console.log(`Error statusText: ${error.response.statusText}`);
        if (error.response.status === 400) {
          
        }
      }
  };

  return (
    <div className={`${styles.votes} ${className}`}>
      <img
        onClick={increaseVotes}
        className={`${styles.sign} ${styles.plus}`}
        src={plusIcon}
        alt="plus"
      />
      <div className={styles.rating}>{votes}</div>
      <img
        onClick={decreaseVotes}
        className={`${styles.sign} ${styles.minus}`}
        src={minusIcon}
        alt="minus"
      />
    </div>
  );
};

Votes.propTypes = {
  rating: PropTypes.number.isRequired,
  sourceId: PropTypes.string.isRequired,
};

export default Votes;
