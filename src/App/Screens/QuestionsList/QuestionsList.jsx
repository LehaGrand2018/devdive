import React, { useState, useEffect } from "react";
import Question from "./Question/Question";
import styles from "./QuestionsList.module.scss";
import PropTypes from "prop-types";
import { getQuestions } from "../../Requests/QuestionsRequests";

const QuestionsList = ({ className }) => {
  const [questions, setQuestions] = useState(null);
  const [questionsToDisplay, setQuestionsToDisplay] = useState(null);

  //load questions
  useEffect(() => {
    (async () => {
      setQuestions((await getQuestions()).questions);
    })();
  }, []);

  // display questions
  useEffect(() => {
    if (questions) {
      setQuestionsToDisplay(
        questions.map((question, index) => {
          return (
            <Question
              key={question.id}
              className={styles.question}
              questionTitle={question.content}
              user={question.user}
              userPhoto={null}
              date={question.created_at}
              rating={0 /*question.upvotes - question.downvotes*/}
              tags={question.tags}
              questionId={question.id}
            ></Question>
          );
        })
      );
    }
  }, [questions]);

  return (
    <div className={`${styles.questionsList} ${className}`}>
      <h2 className={styles.header}>Вопросы</h2>
      {questionsToDisplay}
    </div>
  );
};

QuestionsList.propTypes = {
  className: PropTypes.string,
};

export default QuestionsList;
