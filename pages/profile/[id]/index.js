import React from "react";
import ProfilePage from "../../../containers/ProfilePage";
import Client from "../../../services/Client";
import styles from "../../../styles/Home.module.css";

function profile({ userAcc }) {
  return (
    <div className={styles.loginContainer}>
      <ProfilePage userAcc={userAcc} />
    </div>
  );
}

profile.getInitialProps = async ({ query: { id } }) => {
  const { data } = await Client(`user/${id}`);
  return {
    userAcc: data,
  };
};

export default profile;
