import React, { Component } from "react";
import Class from "../components/CardClasses/Class";
import Post from "../components/CardPosts/Post";
import Question from "../components/CardQuestions/Question";
import TopTrainer from "../components/TopTrainers/TopTrainer";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Schedule from "../components/Schedule/Schedule";
import Client from "../services/Client";

function Home({home}) {
  const renderComponents = () => {
    return home.map((item, id) => {
      switch (item.type) {
        case "post":
          return <Post post={item} key={id} />;
        case "question":
          return <Question question={item} key={id} />;
        case "user-list":
          return <TopTrainer users={item.userList} key={id} />;
      }
    });
  };

  return (
    <div
      style={{ width: "100%" }}
      className={`${styles.container} ${styles.homeGrid}`}
    >
      <div style={{ width: "100%", paddingLeft: "20px", gridColumn: "1/3" }}>
        {renderComponents()}
      </div>
      <div style={{ width: "100%", paddingRight: "20px", marginTop: "20px" }}>
        <Schedule />
        <div style={{ marginTop: "20px" }}>
          <Class />
          <Class />
          <Class />
          <Class />
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const { data } = await Client("home");
  return { home: data.items };

};

export default Home;
