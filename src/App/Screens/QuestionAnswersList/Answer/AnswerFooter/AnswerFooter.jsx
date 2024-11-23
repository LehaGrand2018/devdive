import React from 'react';
import styles from './AnswerFooter.module.scss'
import {parseDate} from '../../../../Functions/Functions';
import PropTypes from 'prop-types';


const AnswerFooter = ({className, username, userPhoto, answerDate}) => {
    return (
        <div className={`${styles.answerFooter} ${className}`}>
            <div className={styles.user}>
                <div className={styles.userPhoto} styles={{backgroundImage: ""}}></div>
                <p className={styles.username}>{username}</p>
            </div>
            <time className={styles.answerDate} dateTime={answerDate}>
                {parseDate(answerDate)}
            </time>
        </div>
    );
};


AnswerFooter.propTypes = {
    username: PropTypes.string.isRequired,
    userPhoto: PropTypes.string,
    answerDate: PropTypes.number.isRequired
}

export default AnswerFooter;