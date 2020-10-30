import Link from "next/link";
import React, { Component } from "react";
import QuestionDetail from "../CardQuestions/QuestionDetail";
import styles from "./CardQuestionPage.module.css";

function CardQuestionCenterDetail({ question }) {
  return (
    <div className={styles.cardQuestionCenter}>
      <p>
        <Link href="/questions">
          <a>
            <i className="fas fa-angle-double-left"></i><span>All Question</span>
          </a>
        </Link>
      </p>
      <QuestionDetail question={question} />
    </div>
  );
}

export default CardQuestionCenterDetail;
