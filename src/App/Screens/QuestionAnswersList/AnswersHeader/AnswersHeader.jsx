import { React } from "react";
import PropTypes from "prop-types";
import styles from "./AnswersHeader.module.scss";
import { addEnding, parseDate } from "../../../Functions/Functions";
import { useTranslation } from "react-i18next";

const AnswersHeader = ({
  className,
  title,
  date,
  answersCount,
  rating,
  votesCount,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.question} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.questionInfo}>
        <p className={styles.date}>{parseDate(date)}</p>
        <p className={styles.answers}>
          {`${answersCount} ${addEnding(`${t("questionAnswersList.reply")}`, answersCount)}`}
        </p>
        <p className={styles.votes}>
          {`${votesCount} ${addEnding(`${t("questionAnswersList.vote")}`, votesCount)}`}
        </p>
        <p className={styles.votes}>{`${t("questionAnswersList.rating")} ${rating}`}</p>
      </div>
    </div>
  );
};

AnswersHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  answers: PropTypes.number,
  votesCount: PropTypes.number,
  rating: PropTypes.number,
};

export default AnswersHeader;
