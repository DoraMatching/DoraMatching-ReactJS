import React from "react";
import styles from "./Question.module.css";
import moment from "moment";

function QuestionComment() {
  return (
    <div className={styles.questionCardComment}>
      <div className={styles.questionCardLeftDetail}>
        <button className={styles.questionCardDetailButton}>
          <span>25</span>
          <i className="far fa-thumbs-up"> </i>
        </button>
      </div>
      <div className={styles.questionCardRight}>
        <p>aaaa</p>
        <div className={styles.questionAvaDetail}>
          <div className={styles.questionAva}>
            <figure className={styles.questionThumbImage}>
              <img
                src=""
                alt="iconQuestion"
                style={{ width: "40px", borderRadius: "50%" }}
              />
            </figure>
          </div>
          <span className={styles.questionAuthorDetail}>
            <span>aaaa</span>
            <p>asked</p> {/*{moment(question.createdAt).format("LLL")} */}
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
