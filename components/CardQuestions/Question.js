import React from "react";
import styles from "./Question.module.css";
import moment from "moment";
import Link from "next/link";
import { Button, Grid, Icon, Popup } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import EditQuestion from "../QuestionsPage/EditQuestions";

function Question({ question }) {
  const { user } = useAuth();

  const { id } = question;
  return (
    <div className={styles.questionCard}>
      <div className={styles.questionHeader}>
        <div className={styles.questionAva}>
          <figure className={styles.questionThumbImage}>
            <img
              src={question.author.avatarUrl}
              alt="iconQuestion"
              style={{ width: "40px", borderRadius: "50%" }}
            />
          </figure>
        </div>
        <div className={styles.questionTitle}>
          <h3 className={styles.questionTitleContent}>
            <Link href={`/questions/${id}`}>
              <a>{question.title}</a>
            </Link>
          </h3>
          <span className={styles.questionAuthor}>
            <span>
              <Link href={`/profile/${question.author.id}`}>
                <a>{question.author.name}</a>
              </Link>
            </span>
            <p>asked {moment(question.createdAt).format("LLL")}</p>
          </span>
        </div>
        <div className={styles.questionThumb}>
          <figure className={styles.questionThumbImage}>
            <img
              src="/static/iconQuestion.png"
              alt="iconQuestion"
              style={{ width: "30px" }}
            />
          </figure>
          {user && user.id && question.author.id === user.id ? (
            <Popup
              position="bottom center"
              wide
              trigger={<i className="fas fa-ellipsis-h"></i>}
              on="click"
            >
              <Grid columns="equal">
                <Grid.Column>
                  <EditQuestion />
                </Grid.Column>
                <Grid.Column>
                  <Button color="red" animated="vertical">
                    <Button.Content visible>Delete</Button.Content>
                    <Button.Content hidden>
                      <Icon name="delete" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid>
            </Popup>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.questionButton}>
        <div className={styles.dum}></div>
        {question.tags.map((tag, index) => {
          return <button key={index}> {tag.name} </button>;
        })}
      </div>

      <div className="classContent">
        <p className={styles.questionDescript}>{question.content}</p>
        <div className={styles.questionMore}>
          <button className={styles.buttonPrimary}>
            <Link href={`/questions/${id}`}>
              <a>
                <i className="fa fa-chevron-right"></i> Read more
              </a>
            </Link>
          </button>
        </div>
        <div className={styles.questionMeta}>
          <button
            className={`${styles.questionMetaCommon} ${styles.questionMetaLike}`}
          >
            <i className="far fa-thumbs-up"> </i>
            <span>25 likes</span>
          </button>
          <button
            className={`${styles.questionMetaCommon} ${styles.questionMetaComment}`}
          >
            <i className="far fa-comment"></i>
            <span>
              {question.comments.length} comment
              {question.comments.length > 1 ? "s" : ""}
            </span>
          </button>
          <button
            className={`${styles.questionMetaCommon} ${styles.questionMetaShare}`}
          >
            <i className="far fa-share"></i>
            <span>25 shares</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
