import { Grid } from "semantic-ui-react";
import Class from "../components/Classes/Class";
import Post from "../components/Posts/Post";
import Question from "../components/Questions/Question";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Grid divided="vertically" columns="12" className={styles.homeGrid}>
          <Grid.Column width={8}>
            <Post />
            <Question />
            <Post />
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
