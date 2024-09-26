import React from 'react';
import PostInfo from './PostInfo/PostInfo';

import styles from './Post.module.scss'

const Post = (props) => {
    //props: postTitle username userPhoto date answerCount votesCount 
    const tags = props.tags.map((tag, index) => {
        return <p key={index} className = {styles.Tag}> {`#${tag}`}</p>
    })

    return (
        <div className={`${styles.Post} ${props.className}`}>
            <PostInfo className={styles.PostInfo}
             username={props.username}
             date = {props.date}
             answersCount={props.answersCount}
             votesCount={props.votesCount} 
             ></PostInfo>
            <h3 className={styles.PostTitle}>{props.postTitle}</h3>
            <div className={styles.Tags}>
                {tags}
            </div>
        </div>
    );
};

export default Post;