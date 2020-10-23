import React, { Component } from "react";
import Question from "../Questions/Question";
import styles from "./CardQuestionPage.module.css";

function CardQuestionCenter({ questions }) {
  return (
    <div className={styles.cardQuestionCenter}>
      <h3>All Question</h3>
      {questions.map((question, id) => {
        return <Question question={question} key={id} />;
      })}
    </div>
  );
}

export default CardQuestionCenter;
