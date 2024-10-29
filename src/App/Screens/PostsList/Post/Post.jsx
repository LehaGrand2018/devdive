import React from 'react';
import PostInfo from './PostInfo/PostInfo';

import styles from './Post.module.scss'

const Post = (props) => {
    //props: postTitle username userPhoto date answerCount votesCount 
    const tags = props.tags.map((tag, index) => {
        return <p key={index} className = {styles.tag}> {`#${tag}`}</p>
    })



    return (
        <div className={`${styles.post} ${props.className}`}>
            <PostInfo className={styles.postInfo}
             username={props.username}
             date = {props.date}
             answersCount={props.answersCount}
             votesCount={props.votesCount} 
             ></PostInfo>
            <h3 className={styles.postTitle}>{`${props.postTitle[0].toUpperCase()}${props.postTitle.slice(1)}`}</h3>
            <div className={styles.tags}>
                {tags}
            </div>
        </div>
    );
};

export default Post;