import React from "react";
import styles from "./CardTopicsPage.module.scss";

function CardLessonRight(props) {
  return (
    <div className={styles.wglCourseEssentials}>
      <h3 className={styles.title}>
        Price:
        <span className={styles.coursePrice}>
          <span className={styles.price}>Free</span>
        </span>
      </h3>
      <ul>
        <li className={styles.students} title="21 students enrolled">
          <i className="fa fa-user"></i>
          <span className="value">21 Students Enrolled</span>
        </li>
        <li className="duration">
          <i className="fa fa-clock"></i>
          <span className="label">Duration:</span>
          <span className="value">10 days</span>
        </li>
        <li className="lectures">
          <i className="fa fa-file"></i>
          <span className="label">Lectures:</span>
          <span className="value">6</span>
        </li>
        <li className="certificate">
          <i className="fa fa-certificate"></i>
          <span className="value">Certificate of Completion</span>
        </li>
      </ul>
      <div className={styles.lpCourseButtons}>
        <button
          className={styles.buttonPurchaseCourse}
          title="Buy this course"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}

export default CardLessonRight;
