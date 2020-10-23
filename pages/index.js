import { Grid } from "semantic-ui-react";
import Class from "../components/Classes/Class";
import Post from "../components/Posts/Post";
import Question from "../components/Questions/Question";
import TopTrainer from "../components/TopTrainers/TopTrainer";
import styles from "../styles/Home.module.css";
import React, { Component } from "react";
import axios from "axios";

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
            return <Post post={item} />;
          case "question":
            console.log('L23', item);
            return <Question question={item} key={item.id} />;
          case "user":
            return <TopTrainer trainer={item} />;
        }
      });
    };

    return (
      <div className={styles.container}>
        <Grid divided="vertically" columns="12" className={styles.homeGrid}>
          <Grid.Column width={8}>
            {/* <Post />
            <Question />
            <Post />
            <TopTrainer /> */}
            {renderComponents()}
          </Grid.Column>
          <Grid.Column width={4}>
            <Class />
            <Class />
            <Class />
            <Class />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Home.getInitialProps = async () => {
  const { data } = await axios.get("https://api.dev.doramatching.tk/home");
  return { home: data.items };
};

export default Home;
