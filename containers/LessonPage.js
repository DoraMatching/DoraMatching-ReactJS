import React, { Component, createRef, useState } from "react";
import {
  Header,
  Image,
  Placeholder,
  Rail,
  Ref,
  Segment,
  Sticky,
} from "semantic-ui-react";
import CardLessonLeft from "../components/TopicPage/CardLessonLeft";
import CardLessonRight from "../components/TopicPage/CardLessonRight";
import styles from "../styles/Home.module.css";
import _ from "lodash";

function LessonPage(props) {
  const [active, setActive] = useState(true);
  const contextRef = createRef();

  return (
    <div className={styles.lessonPage}>
      <div style={{ width: "60%" }}>
        <CardLessonLeft {...props} />
      </div>
      <div style={{ width: "25%", marginLeft: "20px" }}>
        <CardLessonRight {...props} />
      </div>
    </div>
  );
}

export default LessonPage;
