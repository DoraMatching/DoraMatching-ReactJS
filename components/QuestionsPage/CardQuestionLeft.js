import React, { useState } from "react";
import Link from "next/link";
import styles from "./CardQuestionPage.module.css";
import CardTagQuestion from "../CardQuestions/CardTagQuestion";
import CreateQuestion from "./CreateQuestion";


function CardQuestionLeft({ tagQuestions }) {
  return (
    <div className={styles.cardQuestionLeft}>
      <CreateQuestion />
      <div className={styles.cardQuestionTag}>
        <i className="fa fa-tag"></i>
        <span>Tag</span>
      </div>
      <div className={styles.cardQuestionTagDetail}>
        {tagQuestions.map((tagQuestion, id) => {
          return <CardTagQuestion tagQuestion={tagQuestion} key={id} />;
        })}
      </div>
      <p>
        <Link href="/tag-question"> See more tags </Link>
      </p>
    </div>
  );
}
export default CardQuestionLeft;
