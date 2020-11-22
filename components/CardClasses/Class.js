import Link from "next/link";
import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import styles from "./Class.module.scss";
function Classe({ classe }) {
  return (
    <div className={styles.classCard}>
      <div className={styles.courseContentWrapper}>
        <div className={styles.courseThumbnail}>
          <img src={classe.featuredImage} alt="Class" />
        </div>
        <span className={styles.catLinks}>
          <Link href="/">
            <a>{classe.topic.name}</a>
          </Link>
        </span>
        <div className={styles.courseContent}>
          <div className={styles.courseInfo}>
            <Link href="/">
              <a>
                <img
                  alt="Admin bar avatar"
                  src={classe.trainer.user.avatarUrl}
                />
              </a>
            </Link>

            <span className={styles.courseInstructor}>
              <Link href="/">
                <a>{classe.trainer.user.name}</a>
              </Link>
            </span>
            <Link href="/lesson">
              <a>
                <h3 className={styles.courseTitle}>{classe.name}</h3>
              </a>
            </Link>
          </div>
          <div className={styles.courseDivider}></div>
          <div className={styles.courseMeta}>
            <span className={styles.courseStudents} title="students enrolled">
              <Icon name="users" /> 60
            </span>
            <div className={styles.lpCourseButtons}>
              <button>Free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classe;
