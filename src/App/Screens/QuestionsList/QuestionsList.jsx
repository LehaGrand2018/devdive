import React, { useState, useEffect } from "react";
import Question from "./Question/Question";

import styles from "./QuestionsList.module.scss";
import axios from "axios";

const QuestionsList = (props) => {


  const tags = ["python", "javascript", "ruby", "golang"];

  let date = new Date(Date.now());

  const [questions, setQuestions] = useState();

  let questionsList;

  const getQuestions = async () => {
    try {
      let questions = await axios.get(
        "https://jsonplaceholder.typicode.com/questions"
      );
      setQuestions(questions.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
     getQuestions();
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
