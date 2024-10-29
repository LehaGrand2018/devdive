import React from 'react';
import styles from './CommentFooter.module.scss'
import {parseDate} from '../../../../Functions/Functions';
import PropTypes from 'prop-types';


const CommentFooter = ({className, username, userPhoto, commentDate}) => {
    return (
        <div className={`${styles.commentFooter} ${className}`}>
            <div className={styles.user}>
                <div className={styles.userPhoto} styles={{backgroundImage: ""}}></div>
                <p className={styles.username}>{username}</p>
            </div>
            <time className={styles.commentDate} dateTime={commentDate}>
                {parseDate(commentDate)}
            </time>
        </div>
    );
};


CommentFooter.propTypes = {
    username: PropTypes.string.isRequired,
    userPhoto: PropTypes.string,
    commentDate: PropTypes.number.isRequired
}

export default CommentFooter;