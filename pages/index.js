import Head from "next/head";
import { Grid } from "semantic-ui-react";
import Post from "../components/Posts/Post";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Grid divided="vertically">
          <Grid.Column width={8}>
            <Post />
          </Grid.Column>
          <Grid.Column width={4}>
            <div>Quan</div>
          </Grid.Column>
      </Grid>
    </div>
  );
}
