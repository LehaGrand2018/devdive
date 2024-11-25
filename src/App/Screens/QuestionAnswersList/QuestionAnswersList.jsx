import React, { useEffect } from "react";
import styles from "./QuestionAnswersList.module.scss";
import AnswersHeader from "./AnswersHeader/AnswersHeader";
import Answer from "./Answer/Answer";
import { useState } from "react";

import AnswerForm from "./AnswerForm/AnswerForm";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getQuestion } from "../../Requests/QuestionsRequests";

const QuestionAnswersList = ({ className }) => {
  const [answersCount, setAnswersCount] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [votesCount, setVotesCount] = useState(null);
  const { questionId } = useParams();
  const [elements, setElements] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (question) {
      setAnswers(question.answers);
      setAnswersCount(question.answers.length);
      setVotesCount(question.upvotes.length - question.downvotes.length);
    }
  }, [question]);

  useEffect(() => {
    (async () => {
      const questionL = await getQuestion(questionId);
      setQuestion(questionL);
    })();
  }, [questionId]);

  useEffect(() => {
      if (answers) {
        setElements(
          answers.map(({ id, content, user, upvotes, downvotes, created_at }) => {
            return (
              <Answer
                key={id}
                sourceId={id}
                className={styles.answer}
                content={content}
                votesCount={upvotes.length - downvotes.length}
                user={user}
                
                date={created_at}
              ></Answer>
            );
          })
        );
      }
  }, [answers, question]);

  return (
    <div className={`${styles.answers} ${className}`}>
      <AnswersHeader
        className={styles.answersHeader}
        title={question ? question.content : "undefined"}
        date={question ? question.created_at : null}
        answersCount={answersCount}
        votesCount={votesCount}
      ></AnswersHeader>
      {elements}
      <AnswerForm
        questionId={question ? question.id : null}
        setQuestion={setQuestion}
      />
    </div>
  );
};

QuestionAnswersList.propTypes = {
  className: PropTypes.string,
};

export default QuestionAnswersList;