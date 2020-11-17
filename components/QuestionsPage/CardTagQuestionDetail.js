import React, { Component } from "react";
import Question from "../CardQuestions/Question";
import styles from "./CardQuestionPage.module.scss";

function CardTagQuestionDetail({ tagQuestions }) {
  return (
    <div className={styles.cardQuestionCenter}>
      <h3>Tag: </h3>
      {tagQuestions.map((question, id) => {
        return <Question question={question} key={id} />;
      })}
    </div>
  );
}

export default CardTagQuestionDetail;
