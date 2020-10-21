import React, { Component } from 'react';
import styles from './Question.module.css';

class Question extends Component {
  render() {
    return (
      <div className={styles.questionCard}>
        <div className={styles.questionHeader}>
          <div className={styles.questionThumb}>
            <figure className={styles.questionThumbImage}>
              <img
                src="/static/iconQuestion.png"
                alt="iconQuestion"
                style={{ width: "45px" }}
              />
            </figure>
          </div>
          <div className={styles.questionTitle}>
            <h3 className={styles.questionTitleContent}>
              What's the best way to implement a 2D interval search in C++?
            </h3>
            <span className={styles.questionAuthor}>
              <span>Raymond</span> <p>asked Oct 01 2020</p>
            </span>
          </div>
        </div>
        <div className={styles.questionButton}>
          <button>c++</button>
          <button>javascript</button>
        </div>

        <div className="classContent">
          <p className={styles.questionDescript}>
            We can make table scrollable by adding table-responsive class to it,
            but how can we can make table scrollable by adding table-responsive
            class...
          </p>
          <div className={styles.questionMore}>
            <button className={styles.buttonPrimary}>
              <i className="fa fa-chevron-right"></i> Read more
            </button>
          </div>
          <div className={styles.questionMeta}>
            <button className={`${styles.questionMetaCommon} ${styles.questionMetaLike}`}>
              <i className="far fa-thumbs-up"> </i>
              <span>25 likes</span>
            </button>
            <button className={`${styles.questionMetaCommon} ${styles.questionMetaComment}`}>
              <i className="far fa-comment"></i>
              <span>25 comments</span>
            </button>
            <button className={`${styles.questionMetaCommon} ${styles.questionMetaShare}`}>
              <i className="far fa-share"></i>
              <span>25 shares</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;