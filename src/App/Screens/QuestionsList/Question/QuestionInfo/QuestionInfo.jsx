import React from 'react';
import styles from './QuestionInfo.module.scss'
import { parseDate, addEnding } from '../../../../Functions/Functions';

const QuestionInfo = (props) => {
    
    // const date = Date.parse(props.date);

    return (
        <div className={`${styles.QuestionInfo} ${props.className}`}>
            <div className={styles.UserPhoto} style={{backgroundImage: 'none' /*userPhoto*/ }}></div>
            <p className={styles.UserName}>{props.username}</p>
            <time className={styles.QuestionDate} dateTime={props.date}>
                {parseDate(props.date)}
            </time>
            <p className={styles.QuestionAnswers}>
                {`${props.answersCount} ${addEnding('ответ', props.answersCount)}`}
            </p>
            <p className={styles.QuestionVotes}>
                {`${props.votesCount} ${addEnding('голос', props.votesCount)}`}
            </p>
        </div>
    );
};

export default QuestionInfo;