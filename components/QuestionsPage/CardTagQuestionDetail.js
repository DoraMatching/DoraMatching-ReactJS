import React, { Component } from "react";
import CardTagQuestion from "../CardQuestions/CardTagQuestion";
import Question from "../CardQuestions/Question";
import styles from "./CardQuestionPage.module.scss";

function CardTagQuestionDetail({ tagQuestions }) {
  console.log('L6', tagQuestions);
  const {questions} = tagQuestions;
  console.log('L8', questions);
  return (
    <div className={styles.cardQuestionCenter}>
      <h3>Tag: </h3>
      {tagQuestions.map((tagQuestion, id) => {
          return <CardTagQuestion tagQuestion={tagQuestion} key={id} />;
        })}
    </div>
  );
}

export default CardTagQuestionDetail;
