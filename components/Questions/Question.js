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
              <span>Christian</span> <p>published Oct 01 2020</p>
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
            <button className="questionMetaLike">
              <i className="fas fa-thumbs-up">25 likes</i>
            </button>
            <button className="questionMetaComment">
              <i className="fas fa-comments">25 comments</i>
            </button>
            <button className="questionMetaShare">
              <i className="fas fa-share">25 shares</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;