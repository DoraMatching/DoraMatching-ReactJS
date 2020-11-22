import Link from "next/link";
import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import styles from "./Class.module.scss";
function Classe({ classe }) {
  console.log('L6', classe);
  return (
    <div className={styles.classCard}>
      <div className={styles.courseContentWrapper}>
        <div className={styles.courseThumbnail}>
          <img
            src="http://iguru.wgl-demo.net/wp-content/uploads/2019/07/courses_02-435x580.jpg"
            alt="Class"
          />
        </div>
        <span className={styles.catLinks}>
          <Link href="/">
            <a> Photo</a>
          </Link>
        </span>
        <div className={styles.courseContent}>
          <div className={styles.courseInfo}>
            <Link href="/">
              <a>
                <img
                  alt="Admin bar avatar"
                  src="http://iguru.wgl-demo.net/wp-content/uploads/learn-press-profile/3/6e7c39d97dd6c1c56b7ab9520c2edfa0.jpg"
                />
              </a>
            </Link>

            <span className={styles.courseInstructor}>
              <Link href="/">
                <a>Joss Whedon</a>
              </Link>
            </span>
            <Link href="/">
              <a>
                <h3 className={styles.courseTitle}>
                  Photography Techniques: Light, Content &amp; Sharing
                </h3>
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
