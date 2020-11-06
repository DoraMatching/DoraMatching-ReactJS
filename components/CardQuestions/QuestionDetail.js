import React from "react";
import styles from "./Question.module.css";
import moment from "moment";

function QuestionDetail({ question }) {
  return (
    <div className={styles.questionCardDetail}>
      <div className={styles.questionCardLeftDetail}>
        <button className={styles.questionCardDetailButton}>
          <span>25</span>
          <i className="far fa-thumbs-up"> </i>
        </button>
      </div>
      <div className={styles.questionCardRight}>
        <div className={styles.questionButtonDetail}>
          {question.tags.map((tag, index) => {
            return <button key={index}> {tag.name} </button>;
          })}
        </div>
        <p>{question.content}</p>
        <div className={styles.questionAvaDetail}>
          <div className={styles.questionAva}>
            <figure className={styles.questionThumbImage}>
              <img
                src={question.author.avatarUrl}
                alt="iconQuestion"
                style={{ width: "40px", borderRadius: "50%" }}
              />
            </figure>
          </div>
          <span className={styles.questionAuthorDetail}>
            <span>{question.author.name}</span>{" "}
            <p>asked {moment(question.createdAt).format("LLL")}</p>
          </span>
          <div className={styles.questionButtonShareDetail}>
            <i className='far fa-share'></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;
