import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { Component, useState } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import QuestionComment from "../CardQuestions/QuestionComment";
import QuestionDetail from "../CardQuestions/QuestionDetail";
import styles from "./CardQuestionPage.module.css";
import Client from "../../services/Client";


function CardQuestionCenterDetail({ question, comments }) {
  const {user} = useAuth()
  const [content, setContent] = useState("");
  const router = useRouter()
  const { id } = question;

  const onsubmit = (e, v) => {
    if(!user) router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client(`question/${id}/comment`, 'POST', {content}).then(({data}) => {
        console.log(data)
        router.push(`${id}`)
        
      });
    }
  }

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
        {comments.length} Answer{comments.length > 1 ? "s" : ""}
      </Header>
      {comments.map((comment, id) => {
        return <QuestionComment comment={comment} key={id} />;
      })}
      <Form reply onSubmit={onsubmit}>
        <Form.TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </div>
  );
}

export default CardQuestionCenterDetail;
