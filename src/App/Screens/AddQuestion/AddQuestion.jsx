import React from "react";
import Input from "../../Components/Input/Input";
import styles from "./AddQuestion.module.scss";
import { useState } from "react";
import Button from "../../Components/Button/Button";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { getTags } from "../../Requests/TagsRequests";
import { createQuestion } from "../../Requests/QuestionsRequests";
import { useNavigate } from "react-router-dom";
import { createAnswer } from "../../Requests/QuestionAnswersRequests";
import { useTranslation } from "react-i18next";

const AddQuestion = ({ className }) => {
  const { t } = useTranslation();
  const [header, setHeader] = useState(null);
  const [description, setDescription] = useState(null);
  const [tags, setTags] = useState(null);
  const [tagsFromServer, setTagsFromServer] = useState(null);

  const navigate = useNavigate();

  const getTagIds = () => {
    if (tags) {
      const tagsFromInput = tags.split(" ");
      const tagIds = [];
      for (const tag of tagsFromInput) {
        const foundTag = tagsFromServer.tags.find(
          (currTag) => currTag.name.toLowerCase() === tag.toLowerCase()
        );
        if (foundTag) {
          tagIds.push(foundTag.id);
        }
      }
      return tagIds;
    }
    return `Error: field is empty`;
  };

  // setup
  useEffect(() => {
    console.log("setup");

    (async () => {
      setTagsFromServer(await getTags());
    })();
  }, []);

  // useEffect(() => {

  // }, [header, description, tags]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.info("Header:", header);
    console.info("Description:", description);
    console.info("Tags:", tags);
    const tagsForHeaders = getTagIds();
    if (tagsForHeaders) {
      console.log("TagsForHeaders:", tagsForHeaders);
      (async () => {
        try {
          let question = await createQuestion(header, tagsForHeaders);
          console.log("qRes", question);
          const answer = await createAnswer(description, question.id);
          console.log("ansRes", answer);
          navigate("/questions");
        } catch (error) {
          console.error(error);
          console.log(`Error code: ${error.response.status}`);
          console.log(`Error statusText: ${error.response.statusText}`);
        }
      })();
    }
  };

  return (
    <div className={`${styles.AddQuestion} ${className}`}>
      <h1 className={styles.header}>{t("addQuestion.title")}</h1>
      <form className={styles.form} action="" method="question">
        <label htmlFor="questionHeader">{t("addQuestion.header")}</label>
        <Input
          className={styles.questionHeader}
          id="questionHeader"
          name={"questionHeader"}
          placeholder={t("addQuestion.inputHeader")}
          onChange={(e) => setHeader(e.target.value)}
        ></Input>
        <label htmlFor="questionDescription">
          {t("addQuestion.description")}
        </label>
        <textarea
          className={styles.questionDescription}
          placeholder={t("addQuestion.inputDescription")}
          id="questionDescription"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="questionTags">{t("addQuestion.tags")}</label>
        <Input
          className={styles.questionTags}
          id="questionTags"
          placeholder={t("addQuestion.inputTags")}
          onChange={(e) => setTags(e.target.value)}
        ></Input>
        <Button
          className={styles.button}
          type="submit"
          value={t("addQuestion.title")}
          onClick={submitHandler}
        />
      </form>
    </div>
  );
};

AddQuestion.propTypes = {
  className: PropTypes.string,
};
export default AddQuestion;
