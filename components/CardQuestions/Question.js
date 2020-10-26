import React from 'react';
import styles from './Question.module.css';
import moment from 'moment';

function Question({ question }) {
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
          <h3 className={styles.questionTitleContent}>{question.title}</h3>
          <span className={styles.questionAuthor}>
            <span>{question.author.name}</span> <p>asked {moment(question.createdAt).format("LLL")}</p>
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
            <i className="fa fa-chevron-right"></i> Read more
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
            <span>25 comments</span>
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