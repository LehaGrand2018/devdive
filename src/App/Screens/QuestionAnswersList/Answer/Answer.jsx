import React from 'react';
import styles from './Answer.module.scss'
import Votes from './Votes/Votes';
import PropTypes from 'prop-types';
import AnswerFooter from './AnswerFooter/AnswerFooter';


const Answer = ({className, content, user, votesCount, date}) => {



    // const [votes, setVotes] = useState(votesCount)

    return (
        <div className={`${styles.answer} ${className}`}>
            <Votes votesCount={votesCount}></Votes>
            <p className={styles.answerText}>{content}</p>
            <AnswerFooter
                className={styles.answerFooter}
                userPhoto={null}
                username={user.username}
                answerDate={Date.now()/*date*/}
            ></AnswerFooter>
        </div>
    );
};

Answer.propTypes = {
    className:PropTypes.string,
    content: PropTypes.string,
    user: PropTypes.object,
    date: PropTypes.number,
    votesCount: PropTypes.number,
}


export default Answer;