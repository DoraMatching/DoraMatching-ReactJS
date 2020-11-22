import React from "react";
import { useAuth } from "../../contexts/auth";
import Classe from "../CardClasses/Class";
import CardTopicsJoined from "./CardTopicsJoined";
import styles from "./CardTopicsPage.module.scss";
import CreateClass from "./CreateClass";
import CreateTopic from "./CreateTopic";

export default function CardClassesLeft({classes}) {
  const { user } = useAuth();

  return (
    <div className={styles.cardTopicsLeft}>
      <h3>Classes Management</h3>
      <div>
        <CardTopicsJoined />
      </div>
      {user && user.roles.indexOf("TRAINER") !== -1 ? (
        <>
          <CreateTopic />
          <CreateClass />
        </>
      ) : (
        ""
      )}
      <h3>All Classes</h3>
      <div className={styles.cardAllClass}>
        {classes.map((classe, id) => {
          return <Classe classes={classe} key={id} />
        })}
      </div>
    </div>
  );
}
