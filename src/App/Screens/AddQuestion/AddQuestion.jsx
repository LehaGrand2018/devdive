import React from "react";
import Input from "../../Components/Input/Input";
import styles from "./AddQuestion.module.scss";
import { useState } from "react";
import Button from "../../Components/Button/Button";
import { useEffect } from "react";
import PropTypes from "prop-types";

const AddQuestion = ({ className, setIsAddQuestion }) => {
  const [headerValue, setHeaderValue] = useState("Введите заголовок");
  const [textareaValue, setTextareaValue] = useState("Описание");
  const [tagsValue, setTagsValue] = useState("Введите теги");

  // setup
  useEffect(() => {
    console.log("setup")
    setIsAddQuestion("true");
    return () => {
      setIsAddQuestion("false");
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {

  // }, [headerValue, textareaValue, tagsValue])

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <div className={`${styles.AddQuestion} ${className}`}>
      <h1 className={styles.header}>Задать вопрос</h1>
      <form className={styles.form} action="" method="question">
        <label htmlFor="questionHeader">Заголовок</label>
        <Input
          className={styles.questionHeader}
          id="questionHeader"
          placeholder={headerValue}
          onChange={(e) => setHeaderValue(e.target.value)}
        ></Input>
        <label htmlFor="questionDescription">Основная часть</label>
        <textarea
          className={styles.questionDescription}
          placeholder={textareaValue}
          id="questionDescription"
          onChange={(e) => setTextareaValue(e.target.value)}
        />
        <label htmlFor="questionTags">Метки</label>
        <Input
          className={styles.questionTags}
          id="questionTags"
          placeholder={tagsValue}
          onChange={(e) => setTagsValue(e.target.value)}
        ></Input>
        <Button
          className={styles.button}
          type="submit"
          value="Задать вопрос"
          onSubmit={submitHandler}
        />
      </form>
    </div>
  );
};

AddQuestion.propTypes = {
  className: PropTypes.string,
  setIsAddQuestion: PropTypes.func,
};
export default AddQuestion;
