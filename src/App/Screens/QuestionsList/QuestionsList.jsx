import React, { useState, useEffect, useContext } from "react";
import Question from "./Question/Question";

import styles from "./QuestionsList.module.scss";
import { QuestionsContext } from "../../Contexts/QuestionsContext";
import PropTypes from "prop-types";

const QuestionsList = ({className}) => {



  const [questions, setQuestions] = useState(null);
  const [questionsToDisplay, setQuestionsToDisplay] = useState(null);
  const {getQuestions} = useContext(QuestionsContext);
 

  //load questions
  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions((await getQuestions()).questions);
    }

    fetchQuestions();
  }, [getQuestions]);

  // display questions
  useEffect(()=>{
    console.log("Display questions:", questions)
    if (questions) {
      
      setQuestionsToDisplay(
        questions.map((question,index) => {
        return (
          <Question
            key={question.id}
            className={styles.question}
            questionTitle={question.content}
            username={question.user.username}
            userPhoto={null}
            date={question.created_at}
            answersCount={0/*question.answers.length*/}
            votesCount={0/*question.votes.length*/}
            tags={question.tags}
            questionId={question.id}
          ></Question>
        );
      }));
    }
  }, [questions])
  
  return (
    <div className={`${styles.questionsList} ${className}`}>
      <h2 className={styles.header}>Вопросы</h2>
      {questionsToDisplay}
    </div>
  );
};


QuestionsList.propTypes = {
  className : PropTypes.string,
}

export default QuestionsList;
