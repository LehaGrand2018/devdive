import React, { useState, useEffect } from "react";
import Question from "./Question/Question";
import styles from "./QuestionsList.module.scss";
import PropTypes from "prop-types";
import { getQuestions } from "../../Requests/QuestionsRequests";
import { useLocation } from "react-router-dom";
import Search from "../../Components/Search/Search";
import { useTranslation } from "react-i18next";

const QuestionsList = ({ className }) => {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState(null);
  const [questionsToDisplay, setQuestionsToDisplay] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const [params] = useState(new URLSearchParams(location.search));
  let paramsObj = {};
  params.forEach((param, key) => {
    if (key === "tags") {
      if (!paramsObj[key]) {
        paramsObj[key] = [];
      }
      paramsObj[key].push(param);
      return;
    }
    paramsObj[key] = param;
  });

  //load questions
  useEffect(() => {
    (async () => {
      setQuestions((await getQuestions(paramsObj)).questions);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.toString()]);

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

  useEffect(() => {
    if (params.get("content") === "") {
      params.delete("content");
    }
    location.search = params.toString();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.toString()]);

  useEffect(() => {
    setContentParam(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const setContentParam = (content) => {
    params.set("content", content);
  };

  return (
    <div className={`${styles.questionsList} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("questionsList.title")}</h2>
        <Search
          className={styles.search}
          type="text"
          placeholder={t("questionsList.search")}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          hideButton={"true"}
        ></Search>
      </div>
      {questionsToDisplay}
    </div>
  );
};

QuestionsList.propTypes = {
  className: PropTypes.string,
};

export default QuestionsList;
