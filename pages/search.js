import React from "react";
import Post from "../components/CardPosts/Post";
import Question from "../components/CardQuestions/Question";
import Client from "../services/Client";
import styles from "../styles/Home.module.css";
import CardTrainerPage from "../components/CardTrainerPage/CardTrainerPage";

const search = ({ data }) => {
  const { posts, questions, users } = data;
  console.log("l10", users);
  return (
    <div
      style={{ width: "100%" }}
      className={`${styles.container} ${styles.homeGrid}`}
    >
      <div style={{ width: "100%", paddingLeft: "20px", gridColumn: "1/3" }}>
        {posts &&
          posts.map((post, id) => {
            return <Post post={post} key={id} />;
          })}
        {questions &&
          questions.map((question, id) => {
            return <Question question={question} key={id} />;
          })}
        <div className={styles.SearchUser}>
          {users &&
            // users.roles.indexOf("TRAINER") !== -1 &&
            users.map((user, id) => {
              return <CardTrainerPage user={user} key={id} />;
            })}
        </div>
      </div>
    </div>
  );
};

search.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { data } = await Client(
    `search?key=${encodeURIComponent(query["key"])}&scope=${encodeURIComponent(
      `["POST", "QUESTION", "USER"]`
    )}`,
    "GET"
  );
  return { data };
};

export default search;
