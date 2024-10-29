import React, { useState } from 'react';
import PropTypes from 'prop-types';
import plusIcon from './plusIcon.svg';
import minusIcon from './minusIcon.svg';

import styles from './Votes.module.scss'


const Votes = ({className, votesCount}) => {

    const [votes, setVotes] = useState(votesCount);

    const increaseVotes = () => {
        setVotes(votes+1);
        // TODO: req to server
    }
    const decreaseVotes = () => {
        setVotes(votes-1);
        // TODO: req to server
    }


    return (
        <div className={`${styles.votes} ${className}`}>
            <img onClick={increaseVotes} className={`${styles.sign} ${styles.plus}`} src={plusIcon} alt="plus" />
            <p className = {styles.votesCount}>{votes}</p>
            <img onClick={decreaseVotes} className={`${styles.sign} ${styles.minus}`} src={minusIcon} alt="minus" />
        </div>
    );
};

Votes.propTypes = {
    votesCount: PropTypes.number.isRequired
}

export default Votes;