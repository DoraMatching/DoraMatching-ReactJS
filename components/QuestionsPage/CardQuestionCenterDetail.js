import Link from "next/link";
import React, { Component } from "react";
import QuestionComment from "../CardQuestions/QuestionComment";
import QuestionDetail from "../CardQuestions/QuestionDetail";
import styles from "./CardQuestionPage.module.css";

function CardQuestionCenterDetail({ question }) {
  return (
    <div className={styles.cardQuestionCenter}>
      <div className={styles.cardQuestionCenterHeader}>
        <p>
          <Link href="/questions">
            <a>
              <i className="fas fa-angle-double-left"></i>
              <span>All Question</span>
            </a>
          </Link>
        </p>
        <h3>{question.title} </h3>
      </div>
      <QuestionDetail question={question} />
      <div className={styles.cardQuestionCenterDetailAnswer}>
        <p>5 Answers</p>
      </div>
      <QuestionComment />
    </div>
  );
}

export default CardQuestionCenterDetail;
