import React from "react";
import styles from "../../../styles/Home.module.css";
import axios from "axios";
import QuestionsEditPage from "../../../containers/QuestionEditPage";
import Client from "../../../services/Client";

function editQuestion({ question, tagQuestions }) {
  return (
    <div className={styles.container}>
      <QuestionsEditPage question={question} tagQuestions={tagQuestions} />
    </div>
  );
}

editQuestion.getInitialProps = async ({ query: { id } }) => {
  const [question, tagQuestions] = await Promise.all([
    Client(`question/${id}`),
    Client("tag-question"),
  ]);
  return {
    question: question.data,
    tagQuestions: tagQuestions.data.items,
  };
};

export default editQuestion;
