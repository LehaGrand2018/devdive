import React, { useState, useEffect, useContext } from "react";
import Question from "./Question/Question";

import styles from "./QuestionsList.module.scss";
import axios from "axios";
import { QuestionsContext } from "../../Contexts/QuestionsContext";

const QuestionsList = (props) => {


  const tags = ["python", "javascript", "ruby", "golang"];

  let date = new Date(Date.now());

  const [questions, setQuestions] = useState();
  const {getQuestions} = useContext(QuestionsContext);


  let questionsList;

  const fetchQuestions = async () => {
    const res = await getQuestions();
    
  }

  useEffect(() => {
    //  getQuestions();
  }, []);

  if (questions !== undefined) {
    questionsList = questions.map((question /*{userId, id, title}*/,index) => {
      // console.log("map");
      return (
        <Question
          key={question.id}
          className={styles.question}
          questionTitle={question.title}
          username={"user" + question.userId}
          userPhoto={null}
          date={date.toUTCString()}
          answersCount={question.id}
          votesCount={0}
          tags={tags}
          questionId={index}
        ></Question>
      );
    });
  }

  return (
    <div className={`${styles.questionsList} ${props.className}`}>
      <h2 className={styles.header}>Вопросы</h2>
      {questionsList}
    </div>
  );
};

export default QuestionsList;
