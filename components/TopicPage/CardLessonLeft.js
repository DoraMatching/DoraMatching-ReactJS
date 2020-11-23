import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import styles from "./CardTopicsPage.module.scss";

export default function CardLessonLeft({classe, lessons}) {
  const [panes, setPanes] = useState([]);
  const renderPanes = async () =>{
    return [
      {
        menuItem: "Lessons",
        render: () => <Tab.Pane attached={false}>
          {lessons.map((lesson, id) => {
            return <div key={id} className={styles.MangeLesson}>
              <p>{lesson.name}</p>
              <p>{lesson.duration} minutes</p>
              <p>{moment(lesson.startTime).format("lll")}</p>
              </div>
          })}
        </Tab.Pane>,
      },
      {
        menuItem: "Members",
        render: () => <Tab.Pane attached={false}>
          
          {classe.members.map((member, id) => {
            return <div key={id}>
              <img src={member.user.avatarUrl} alt="avtMember"/>
            </div>
          })}
        </Tab.Pane>,
      },
    ];
  } 
  useEffect(() => {
    renderPanes().then((components) => setPanes(components))
  },[])
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
          {classe.name}
        </h1>
        <div className={styles.courseMeta}>
          <span className={styles.courseAuthor}>
            <img
              alt="Admin bar avatar"
              src={classe.trainer.user.avatarUrl}
              className="avatar avatar-96 photo"
              height="96"
              width="96"
            />
            <span className={styles.authorData}>
              <span className={styles.metaTitle}>Teacher</span>
              <span className="meta_data">
                <a href="/">
                  {classe.trainer.user.name}
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
                    {classe.topic.name}
                </span>
              </span>
            </span>
          </span>
        </div>
        <div className={styles.courseThumbnail}>
          <img src={classe.featuredImage} alt="lessonThumbnail" />
        </div>
        <div>
          <Tab menu={{ secondary: true }} panes={panes} />
        </div>
      </div>
    </div>
  );
}
