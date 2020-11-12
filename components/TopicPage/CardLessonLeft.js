import React from "react";
import { Tab } from "semantic-ui-react";
import styles from "./CardTopicsPage.module.scss";
import Link from 'next/link'

const panes = [
  {
    menuItem: 'Curriculum',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
]

export default function CardLessonLeft() {
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>
        <Link href="/classes">
          <a>
            <i className="fas fa-angle-double-left"></i>
            <span>All Classes</span>
          </a>
        </Link>{" "}
      </h3>
      <div className={styles.cardAllLesson}>
        <h1 className="course-title">
          English for Science, Techs &amp; Engineering
        </h1>
        <div className="course-meta">
          <span class="course-author">
            <a
              href="http://iguru.wgl-demo.net/profile/user3/"
              class="author-img"
            >
              <img
                alt="Admin bar avatar"
                src="http://iguru.wgl-demo.net/wp-content/uploads/learn-press-profile/5/aaa2bad572c9371cbcbfd6cfe72d9f28.jpg"
                class="avatar avatar-96 photo"
                height="96"
                width="96"
              />
            </a>
            <span class="author-data">
              <span class="meta_title">Teacher</span>
              <span class="meta_data">
                <a href="http://iguru.wgl-demo.net/profile/user3/">
                  Nicole Brown
                </a>
              </span>
            </span>
          </span>{" "}
          <span class="course-category">
            <i class="cat-icon flaticon-folder"></i>
            <span class="cat_data">
              <span class="meta_title">Topic</span>
              <span class="meta_data">
                <span class="cat-links">
                  <a
                    href="http://iguru.wgl-demo.net/course-category/languages/"
                    rel="tag"
                  >
                    Languages
                  </a>
                </span>
              </span>
            </span>
          </span>
        </div>
        <div className="course-thumbnail">
          <img src="/static/coverLogin.jpg" alt="lessonThumbnail" />
        </div>
        <div>
          <Tab menu={{ secondary: true }} panes={panes} />
        </div>
      </div>
    </div>
  );
}
