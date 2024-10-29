import React, { useEffect, useState } from 'react';
import styles from './Comment.module.scss'
import Votes from './Votes/Votes';
import PropTypes from 'prop-types';
import CommentFooter from './CommentFooter/CommentFooter';


const Comment = ({className, commentText, votesCount}) => {

    let username = 'neurotrier'

    const [votes, setVotes] = useState(votesCount)

    return (
        <div className={`${styles.comment} ${className}`}>
            <Votes votesCount={votesCount}></Votes>
            <p className={styles.commentText}>{commentText}</p>
            <CommentFooter
                className={styles.commentFooter}
                userPhoto={null}
                username={username}
                commentDate={Date.now()}
            ></CommentFooter>
        </div>
    );
};

Comment.propTypes = {
    commentText: PropTypes.string,
    votesCount: PropTypes.number
}


export default Comment;