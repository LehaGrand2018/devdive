import React, { useState } from "react";
import Button from "../../../Components/Button/Button";

import styles from "./AnswerForm.module.scss";
import PropTypes from "prop-types";
import { createAnswer } from "../../../Requests/QuestionAnswersRequests";
import { getQuestion } from "../../../Requests/QuestionsRequests";
import { useTranslation } from "react-i18next";

const AnswerForm = ({ className, questionId, setQuestion }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You input:", inputValue);
    (async () => {
      const res = await createAnswer(inputValue, questionId);
      console.log("RES Answer:", res);
      const question = await getQuestion(questionId);
      setQuestion(question);
    })();
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <label className={styles.formHeader}>{t("questionAnswersList.yourReply")}</label>
      <textarea
        className={styles.formInput}
        placeholder={t("questionAnswersList.inputReply")}
        value={inputValue ? inputValue : ""}
        id="answerInput"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        className={styles.formButton}
        value={t("questionAnswersList.addReply")}
      ></Button>
    </form>
  );
};

AnswerForm.propTypes = {
  className: PropTypes.string,
  questionId: PropTypes.string,
  setQuestion: PropTypes.func,
};
export default AnswerForm;
