import React, { Component } from "react";
import styles from "./Class.module.css";

class Class extends Component {
  render() {
    return (
      <div className={styles.classCard}>
        <div className={styles.classHeader}>
          <div className={styles.classThumb}>
            <h2>30</h2>
            <span>hours</span>
          </div>
          <div className={styles.classTitle}>
            <h5>
              Fully Responsive Web Design & Development.
            </h5>
            <span className={styles.classAuthor}>
              <p>Web</p>
              <span>Christian Tran</span>
            </span>
          </div>
        </div>
        <div className={styles.classMeta}>
          <div className={styles.classMetaTrain}>
            <i class="fas fa-graduation-cap"></i>
            <p>30 trainees</p>
          </div>
          <i className="fas fa-heart"></i>
          <button>Join now</button>
        </div>
      </div>
    );
  }
}

export default Class;
