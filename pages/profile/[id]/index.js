import React from "react";
import ProfilePage from "../../../containers/ProfilePage";
import Client from "../../../services/Client";
import styles from "../../../styles/Home.module.css";

function profile({ userAcc, classes }) {
  return (
    <div className={styles.loginContainer}>
      <ProfilePage userAcc={userAcc} classes={classes} />
    </div>
  );
}

profile.getInitialProps = async ({ query: { id } }) => {
  const [userAcc, classes] = await Promise.all([
    Client(`user/${id}`),
    Client(`classes?page=1&limit=5&order=DESC`)
  ]);
  return {
    userAcc: userAcc.data,
    classes: classes.data.items,
  };
};

export default profile;
