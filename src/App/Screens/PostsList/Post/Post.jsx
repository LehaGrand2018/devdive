import React from 'react';
import PostInfo from './PostInfo/PostInfo';

import styles from './Post.module.scss'
import { useLocation, useNavigate } from 'react-router-dom';

const Post = ({className, postTitle, postId, username, date, answersCount, votesCount, tags}) => {
    //props: postTitle username userPhoto date answerCount votesCount 
    const tagsToShow = tags.map((tag, index) => {
        return <p key={index} className = {styles.tag}> {`#${tag}`}</p>
    })

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={`${styles.post} ${className}`}>
            <PostInfo className={styles.postInfo}
             username={username}
             date = {date}
             answersCount={answersCount}
             votesCount={votesCount} 
             ></PostInfo>
            <h3 className={styles.postTitle} onClick={() => {navigate(`${location.pathname}/${postId}`)}}>{`${postTitle[0].toUpperCase()}${postTitle.slice(1)}`}</h3>
            <div className={styles.tags}>
                {tagsToShow}
            </div>
        </div>
    );
};

Post.propTypes = {

}

export default Post;