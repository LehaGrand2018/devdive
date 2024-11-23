import {React} from 'react';
import PropTypes from 'prop-types';
import styles from "./AnswersHeader.module.scss"
import { addEnding, parseDate } from '../../../Functions/Functions';





const AnswersHeader = ({className, title, date, answersCount, votesCount, setVotes}) => {
    return (
        <div className={`${styles.question} ${className}`}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.questionInfo}>
                <p className={styles.date}>{parseDate(date)}</p>
                <p className={styles.answers}>{`${answersCount} ${addEnding('ответ', answersCount)}`}</p>
                <p className={styles.votes}>{`${votesCount} ${addEnding('голос', votesCount)}`}</p>
            </div>
        </div>
    );
};

AnswersHeader.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    answers: PropTypes.number,
    votes: PropTypes.number,
};

export default AnswersHeader;