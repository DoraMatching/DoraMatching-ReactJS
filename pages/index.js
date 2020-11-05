import React, { Component } from "react";
import Class from "../components/CardClasses/Class";
import Post from "../components/CardPosts/Post";
import Question from "../components/CardQuestions/Question";
import TopTrainer from "../components/TopTrainers/TopTrainer";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Schedule from "../components/Schedule/Schedule";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { home } = this.props;
    const renderComponents = () => {
      return home.map((item) => {
        switch (item.type) {
          case "post":
            return <Post post={item} key={item.id} />;
          case "question":
            return <Question question={item} key={item.id} />;
          case "user-list":
            return <TopTrainer users={item.userList} key={item.userList.id} />;
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
          <div style={{marginTop: '20px'}}>
            <Class />
            <Class />
            <Class />
            <Class />
          </div>
        </div>
      </div>
    );
  }
}

Home.getInitialProps = async () => {
  const { data } = await axios.get("https://api.dev.doramatching.tk/home");
  return { home: data.items };
};

export default Home;
