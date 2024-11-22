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

const AddQuestion = ({ className, setIsAddQuestion }) => {
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
          (currTag) => currTag.name === tag
        );
        if (foundTag) {
          tagIds.push(foundTag.id);
        }
        //  else {
        //   return `Error: tag "${tag}" not found.`;
        // }
      }
      return tagIds;
    }
    return `Error: field is empty`;
  };

  // setup
  useEffect(() => {
    console.log("setup");
    setIsAddQuestion("true");

    (async () => {
      setTagsFromServer(await getTags());
    })();

    return () => {
      setIsAddQuestion("false");
    };
  }, [setIsAddQuestion]);

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
          const res = await createQuestion(header, tagsForHeaders);
          console.log("Response", res);
          navigate("/questions");
        } catch (error) {
          console.error(error);
          console.log(`Error code: ${error.response.status}`);
          console.log(`Error statusText: ${error.response.statusText}`);
        }
      })();
      // const res = createQuestion(header, tagsForHeaders);
      // console.log("Response", res);
      // res
      //   .then(() => {
      //     navigate("/questions");
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     console.log(`Error code: ${error.response.status}`);
      //     console.log(`Error statusText: ${error.response.statusText}`);
      //   });
    }
  };

  return (
    <div className={`${styles.AddQuestion} ${className}`}>
      <h1 className={styles.header}>Задать вопрос</h1>
      <form className={styles.form} action="" method="question">
        <label htmlFor="questionHeader">Заголовок</label>
        <Input
          className={styles.questionHeader}
          id="questionHeader"
          name={"questionHeader"}
          placeholder={"Введите заголовок"}
          onChange={(e) => setHeader(e.target.value)}
        ></Input>
        <label htmlFor="questionDescription">Основная часть</label>
        <textarea
          className={styles.questionDescription}
          placeholder={"Описание"}
          id="questionDescription"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="questionTags">Метки</label>
        <Input
          className={styles.questionTags}
          id="questionTags"
          placeholder={"Введите теги"}
          onChange={(e) => setTags(e.target.value)}
        ></Input>
        <Button
          className={styles.button}
          type="submit"
          value="Задать вопрос"
          onClick={submitHandler}
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
