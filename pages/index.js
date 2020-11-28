import React, { Component } from "react";
import Classe from "../components/CardClasses/Class";
import Post from "../components/CardPosts/Post";
import Question from "../components/CardQuestions/Question";
import TopTrainer from "../components/TopTrainers/TopTrainer";
import styles from "../styles/Home.module.css";
import Schedule from "../components/Schedule/Schedule";
import Client from "../services/Client";
import { useAuth } from "../contexts/auth";

function Home({home, classes}) {
  const {user} = useAuth();
  const renderComponents = () => {
    return home.map((item, id) => {
      switch (item.type) {
        case "post":
          return <Post post={item} key={id} />;
        case "question":
          return <Question question={item} key={id} />;
        // case "user-list":
        //   return <TopTrainer users={item.userList} key={id} />;
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
        {user && <Schedule user={user} />}
        <div style={{ marginTop: "20px" }}>
          {classes.map((classe, id) => {
            return <Classe classe={classe} key={id} />
          })}
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const [home, classes] = await Promise.all([
    Client("home"),
    Client(`classes?page=1&limit=5&order=DESC`)
  ]);
  return {
    home: home.data.items,
    classes: classes.data.items,
  };

};

export default Home;
