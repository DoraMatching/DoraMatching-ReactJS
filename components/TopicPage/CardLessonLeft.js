import React from "react";
import { Tab } from "semantic-ui-react";
import styles from "./CardTopicsPage.module.scss";
import Link from "next/link";

const panes = [
  {
    menuItem: "Curriculum",
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
];

export default function CardLessonLeft() {
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>
        <Link href="/classes">
          <a>
            <i className="fas fa-angle-double-left"></i>
            <span>All Classes</span>
          </a>
        </Link>
      </h3>
      <div className={styles.cardAllLesson}>
        <h1 className={styles.courseTitle}>
          English for Science, Techs &amp; Engineering
        </h1>
        <div className={styles.courseMeta}>
          <span className={styles.courseAuthor}>
            <img
              alt="Admin bar avatar"
              src="http://iguru.wgl-demo.net/wp-content/uploads/learn-press-profile/5/aaa2bad572c9371cbcbfd6cfe72d9f28.jpg"
              className="avatar avatar-96 photo"
              height="96"
              width="96"
            />
            <span className={styles.authorData}>
              <span className={styles.metaTitle}>Teacher</span>
              <span className="meta_data">
                <a href="/">
                  Raymond
                </a>
              </span>
            </span>
          </span>
          <span className={styles.courseCategory}>
            <i className="far fa-folder"></i>
            <span className={styles.catData}>
              <span className={styles.metaTitle}>Topic</span>
              <span className="meta_data">
                <span className="cat-links">
                    React Native
                </span>
              </span>
            </span>
          </span>
        </div>
        <div className={styles.courseThumbnail}>
          <img src="/static/coverLogin.jpg" alt="lessonThumbnail" />
        </div>
        <div>
          <Tab menu={{ secondary: true }} panes={panes} />
        </div>
      </div>
    </div>
  );
}
