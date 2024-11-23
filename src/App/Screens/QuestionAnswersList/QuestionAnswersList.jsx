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

  useEffect(()=>{
    if (question) {
      setAnswers(question.answers);
      setAnswersCount(question.answers.length);
      setVotesCount(question.upvotes.length - question.downvotes.length);
    }
  }, [question])

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
              className={styles.answer}
              content={content}
              votesCount={upvotes.length - downvotes.length}
              user={user}
              ƒ
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
      <AnswerForm questionId={question ? question.id : null} setQuestion={setQuestion}/>
    </div>
  );
};

QuestionAnswersList.propTypes = {
  className: PropTypes.string,
};

export default QuestionAnswersList;

// const data = {
//   title:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo est. Lorem ipsum dolor.",
//   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar non elit vel sodales. Maecenas et aliquam magna, vitae fermentum metus. Suspendisse potenti. Etiam et eros nec felis porttitor placerat et sed odio. Morbi rutrum dolor vel sapien interdum sodales. Duis et enim ex. Duis ac mattis risus. Quisque mollis tellus vel magna ultrices maximus. Etiam eu erat et est consequat blandit. Phasellus vitae malesuada quam, fermentum porta sem. Integer interdum lacus orci. Donec ultricies semper purus, a viverra urna. Praesent accumsan nisi aliquet est hendrerit ullamcorper. Morbi elementum metus nulla, vel fermentum neque pellentesque in.Donec id massa ultrices, dictum arcu ac, maximus ex. Donec fermentum metus at sem egestas viverra. In vel neque aliquet, aliquam lacus in, auctor quam. Pellentesque in iaculis dolor. Vivamus in faucibus enim. Suspendisse ipsum erat, finibus a finibus vel, varius scelerisque felis. Donec faucibus metus nec felis eleifend, a cursus lectus condimentum.Etiam dictum purus eget justo aliquam, malesuada tempor mi mattis. Sed id lacus interdum, mattis mauris a, vulputate purus. Vestibulum aliquam pulvinar metus, ut accumsan massa ornare nec. Sed accumsan tristique nulla id feugiat. Pellentesque mattis urna libero, sodales porttitor erat ornare sit amet. Nullam turpis lectus, fermentum eget hendrerit consectetur, feugiat vel nisi. Aenean maximus efficitur posuere. Aliquam pharetra fringilla nibh, non tincidunt arcu luctus vel. Pellentesque a bibendum orci. Vivamus cursus finibus quam sit amet ullamcorper. Nam commodo dignissim sem. Fusce vel risus metus. Donec vestibulum laoreet sem, vitae elementum odio consectetur sed. Etiam tincidunt lacinia risus a rutrum. Fusce viverra venenatis nisi eu cursus.",
//   date: new Date(Date.now()),
// };
