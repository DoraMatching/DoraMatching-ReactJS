import React from "react";
import styles from "../../../../styles/Home.module.css";
import axios from "axios";
import TagQuestionDetailPage from "../../../../containers/TagQuestionDetailPage";
function tagQuestion({ tagQuestions, tagItem }) {
  return (
    <div className={styles.container}>
      <TagQuestionDetailPage tagQuestions={tagQuestions} tagItem={tagItem} />
    </div>
  );
}

tagQuestion.getInitialProps = async ({ query: { id } }) => {
  const [tagQuestions] = await Promise.all([
    axios.get("https://api.dev.doramatching.tk/tag-question"),
  ]);
  console.log('L18', tagQuestions);
  return {
    tagQuestions: tagQuestions.data.items,
    tagItem : tagQuestions.data.items.filter(item => item.id === id)
  };
};

export default tagQuestion;
