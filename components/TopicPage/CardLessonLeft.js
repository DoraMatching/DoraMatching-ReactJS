import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Accordion, Icon, Image, Label, List, Tab } from "semantic-ui-react";
import styles from "./CardTopicsPage.module.scss";

export default function CardLessonLeft({ classe, lessons }) {
  const [panes, setPanes] = useState([]);
  const [activeIndex, setActiveIndex] = useState([]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex;

    const currentIndexPosition = activeIndex.indexOf(index);
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(index);
    }
    // const newIndex = activeIndex === index ? -1 : index

    setActiveIndex({ activeIndex: newIndex });
  };

  const renderPanes = async () => {
    return [
      {
        menuItem: "Lessons",
        render: () => (
          <Tab.Pane attached={false}>
            <Accordion fluid styled>
              {lessons.map((lesson, id) => {
                return (
                  <div key={id}>
                    <Accordion.Title
                      active={activeIndex.includes(id)}
                      index={id}
                      onClick={handleClick}
                    >
                      <Icon name="dropdown" />
                      <span style={{textTransform: 'uppercase', color: '#58606E'}}>{lesson.name}</span>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex.includes(id)}>
                      <p><span style={{fontWeight: 'bold'}}>Time</span>: {lesson.duration} minutes</p>
                      <p>
                      <span style={{fontWeight: 'bold'}}>Time start</span>: {moment(lesson.startTime).format("lll")}
                      </p>
                    </Accordion.Content>
                  </div>
                );
              })}
            </Accordion>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Members",
        render: () => (
          <Tab.Pane attached={false}>
            <List divided selection>
              {classe.members.map((member, id) => {
                return (
                  <List.Item key={id}>
                    <Label horizontal>
                      <Image
                        src={member.user.avatarUrl}
                        avatar
                        alt="avtMember"
                      />
                    </Label>
                    <Link href={`/profile/${member.user.id}`}>
                      <a>
                        <span>{member.user.name}</span>
                      </a>
                    </Link>
                  </List.Item>
                );
              })}
            </List>
          </Tab.Pane>
        ),
      },
    ];
  };
  useEffect(() => {
    renderPanes().then((components) => setPanes(components));
  }, []);
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>
        <Link href="/classes">
          <a>
            <Icon name="angle left" />
            <span>Back to Classes</span>
          </a>
        </Link>
      </h3>
      <div className={styles.cardAllLesson}>
        <h1 className={styles.courseTitle}>{classe.name}</h1>
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
              <span className={styles.metaTitle}>Trainer</span>
              <span className="meta_data">
                <a href="/">{classe.trainer.user.name}</a>
              </span>
            </span>
          </span>
          <span className={styles.courseCategory}>
            <i className="far fa-folder"></i>
            <span className={styles.catData}>
              <span className={styles.metaTitle}>Topic</span>
              <Link href={`/topics/${classe.topic.id}/classes`}>
                <a>
                  <span className="meta_data">
                    <span className="cat-links">{classe.topic.name}</span>
                  </span>
                </a>
              </Link>
            </span>
          </span>
        </div>
        <div className={styles.courseThumbnail}>
          <img src={classe.featuredImage} alt="lessonThumbnail" />
        </div>
        <div>
          <Tab
            className={styles.CardLessonLeftTab}
            menu={{ secondary: true }}
            panes={panes}
          />
        </div>
      </div>
    </div>
  );
}
