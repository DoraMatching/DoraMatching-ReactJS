import React from "react";
import CardTrainerPage from "../CardTrainerPage/CardTrainerPage";
import styles from "./CardTrainers.module.css";

function CardTrainersLeft({users}) {
  return (
    <>
      <h3 className={styles.cardTrainersLefHeader}>All Trainers</h3>
      <div className={styles.cardTrainersLeftDetail}>
        {users.map((user, id) => {
          return <CardTrainerPage user={user} key={id} />;
        })}
      </div>
    </>
  );
}

export default CardTrainersLeft;
