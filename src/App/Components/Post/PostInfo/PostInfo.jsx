import React from 'react';
import styles from './PostInfo.module.scss'


const PostInfo = (props) => {
    
    // const date = Date.parse(props.date);

    const addEnding = (word, count) => {

        let result = word
        
        if (count % 10 >= 2 && count % 10 <= 4) {
            return (result += 'а');
        }
        if (count % 10 === 0 || (count % 10 >= 5 && count % 10 <= 9)) {
            return (result += 'ов');
        }
    }

    return (
        <div className={`${styles.PostInfo} ${props.className}`}>
            <div className={styles.UserPhoto} style={{backgroundImage: 'none' /*props.userPhoto*/ }}></div>
            <p className={styles.UserName}>{props.username}</p>
            <time className={styles.PostDate} dateTime={props.date}>
                {props.date}
            </time>
            <p className={styles.PostAnswers}>
                {`${props.answersCount} ${addEnding('ответ', props.answersCount)}`}
            </p>
            <p className={styles.PostVotes}>
                {`${props.votesCount} ${addEnding('голосов', props.votesCount)}`}
            </p>
        </div>
    );
};

export default PostInfo;