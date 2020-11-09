import Link from "next/link";
import React, { Component } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import QuestionComment from "../CardQuestions/QuestionComment";
import QuestionDetail from "../CardQuestions/QuestionDetail";
import styles from "./CardQuestionPage.module.css";

function CardQuestionCenterDetail({ question, comments }) {
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
      <Header as="h3" dividing>
        {comments.length} Answers
      </Header>
      {comments.map((comment, id) => {
        return <QuestionComment comment={comment} key={id} />;
      })}
      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </div>
  );
}

export default CardQuestionCenterDetail;
