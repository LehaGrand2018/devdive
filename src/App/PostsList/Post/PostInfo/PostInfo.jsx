import React from 'react';
import styles from './PostInfo.module.scss'
import { parseDate, addEnding } from '../../../Functions/Functions';

const PostInfo = (props) => {
    
    // const date = Date.parse(props.date);

    return (
        <div className={`${styles.PostInfo} ${props.className}`}>
            <div className={styles.UserPhoto} style={{backgroundImage: 'none' /*userPhoto*/ }}></div>
            <p className={styles.UserName}>{props.username}</p>
            <time className={styles.PostDate} dateTime={props.date}>
                {parseDate(props.date)}
            </time>
            <p className={styles.PostAnswers}>
                {`${props.answersCount} ${addEnding('ответ', props.answersCount)}`}
            </p>
            <p className={styles.PostVotes}>
                {`${props.votesCount} ${addEnding('голос', props.votesCount)}`}
            </p>
        </div>
    );
};

export default PostInfo;