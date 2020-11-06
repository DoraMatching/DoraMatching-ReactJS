import React from "react";
import styles from "./Question.module.css";
import moment from "moment";

function QuestionComment({ comment }) {
  return (
    <div className={styles.questionCardComment}>
      <div className={styles.questionCardLeftDetail}>
        <button className={styles.questionCardDetailButton}>
          <span>5</span>
          <i className="far fa-thumbs-up"> </i>
        </button>
      </div>
      <div className={styles.questionCardRight}>
        <p>{comment.content}</p>
        <div className={styles.questionAvaDetail}>
          <div className={styles.questionAva}>
            <figure className={styles.questionThumbImage}>
              <img
                src={comment.author.avatarUrl}
                alt="iconQuestion"
                style={{ width: "40px", borderRadius: "50%" }}
              />
            </figure>
          </div>
          <span className={styles.questionAuthorDetail}>
            <span>aaaa</span>
            <p>answered {moment(comment.createdAt).format("LLL")}</p> 
          </span>
          <div className={styles.questionButtonShareDetail}>
            <i className="far fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionComment;
