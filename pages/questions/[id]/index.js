import React from "react";
import QuestionsPageDetail from "../../../containers/QuestionsPageDetail";
import styles from "../../../styles/Home.module.css";
import axios from "axios";

function question({ question, tagQuestions, comments }) {
  return (
    <div className={styles.container}>
      <QuestionsPageDetail question={question} tagQuestions={tagQuestions} comments={comments} />
    </div>
  );
}

question.getInitialProps = async ({ query: { id } }) => {
  const [question, tagQuestions] = await Promise.all([
    axios.get(`https://api.dev.doramatching.tk/question/${id}`),
    axios.get("https://api.dev.doramatching.tk/tag-question"),
  ]);
  return {
    question: question.data,
    tagQuestions: tagQuestions.data.items,
    comments: question.data.comments
  };
};

export default question;
