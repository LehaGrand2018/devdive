import React from "react";
import Input from "../Components/Input/Input";
import styles from "./AddPost.module.scss";
import { useState } from "react";
import Button from "../Components/Button/Button";

const AddPost = ({ className }) => {
  const [headerValue, setHeaderValue] = useState("Введите заголовок");
  const [textareaValue, setTextareaValue] = useState("Описание");
  const [tagsValue, setTagsValue] = useState("Введите теги");

  return (
    <div className={`${styles.AddPost} ${className}`}>
      <h1 className={styles.header}>Задать вопрос</h1>
      <form className={styles.form} action="" method="post">
        <label htmlFor="questionHeader">Заголовок</label>
        <Input
          className={styles.questionHeader}
          id="questionHeader"
          placeholder={headerValue}
          // onChange={(e) => setHeaderValue(e.target.value)}
        ></Input>
        <label htmlFor="questionDescription">Основная часть</label>
        <textarea
          className={styles.questionDescription}
          placeholder={textareaValue}
          id="questionDescription"
          // onChange={(e) => setTextareaValue(e.target.value)}
        />
        <label htmlFor="questionTags">Метки</label>
        <Input
          className={styles.questionTags}
          id="questionTags"
          placeholder={tagsValue}
          // onChange={(e) => setTagsValue(e.target.value)}
        ></Input>
        <Button className={styles.button} type="submit" value="Задать вопрос"/>
      </form>
    </div>
  );
};

export default AddPost;
