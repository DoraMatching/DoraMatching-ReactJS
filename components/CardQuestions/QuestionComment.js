import React from "react";
import styles from "./Question.module.css";
import moment from "moment";

function QuestionComment({ comment }) {
  return (
    <div className={styles.questionCardComment}>
      <div className={styles.questionCardRight}>
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
        <p className={styles.questionContentDetail}>{comment.content}</p>
        {/* <button className={styles.questionCommentButton}>
          <i className="far fa-thumbs-up"> </i>
          <span>5</span>
        </button> */}
      </div>
    </div>
  );
}

export default QuestionComment;
