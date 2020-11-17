import React from "react";
import styles from "../../../../styles/Home.module.css";
import axios from "axios";
import TagQuestionDetailPage from "../../../../containers/TagQuestionDetailPage";

function tagQuestion({ question, tagQuestions, comments }) {
  return (
    <div className={styles.container}>
      <TagQuestionDetailPage question={question} tagQuestions={tagQuestions} comments={comments} />
    </div>
  );
}

tagQuestion.getInitialProps = async ({ query: { id } }) => {
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

export default tagQuestion;
