import React from "react";
import styles from "../../../styles/Home.module.css";
import axios from "axios";
import QuestionsEditPage from "../../../containers/QuestionEditPage";

function editQuestion({ question, tagQuestions }) {
  return (
    <div className={styles.container}>
      <QuestionsEditPage question={question} tagQuestions={tagQuestions} />
    </div>
  );
}

editQuestion.getInitialProps = async ({ query: { id } }) => {
  const [question, tagQuestions] = await Promise.all([
    axios.get(`https://api.dev.doramatching.tk/question/${id}`),
    axios.get("https://api.dev.doramatching.tk/tag-question"),
  ]);
  return {
    question: question.data,
    tagQuestions: tagQuestions.data.items,
  };
};

export default editQuestion;
