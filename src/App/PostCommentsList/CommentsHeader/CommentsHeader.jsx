import {React} from 'react';
import PropTypes from 'prop-types';
import styles from './CommentsHeader.module.scss'
import { addEnding } from '../../Functions/Functions';
import { useEffect } from 'react';




const CommentsHeader = ({className, title, date, answersCount, votesCount, setVotes}) => {
    
    return (
        <div className={`${styles.commentsHeader} ${className}`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.date}>{date}</p>
            <p className={styles.answers}>{`${answersCount} ${addEnding('ответ', answersCount)}`}</p>
            <p className={styles.votes}>{`${votesCount} ${addEnding('голос', votesCount)}`}</p>
        </div>
    );
};

CommentsHeader.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    answers: PropTypes.number,
    votes: PropTypes.number,
};
export default CommentsHeader;