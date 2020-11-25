import React from "react";
import Carousel from "react-elastic-carousel";
import CardTrainer from "../CardTrainer/CardTrainer";
import CardTrainerPage from "../CardTrainerPage/CardTrainerPage";
import styles from "./CardTrainers.module.css";

function CardTrainersLeft({ users }) {
  const breakPoints = [{ width: 200, itemsToShow: 3 }];
  return (
    <>
      {/* <h3 className={styles.cardTrainersLefHeader}>Top Trainer</h3>
      <Carousel breakPoints={breakPoints} showArrows={false} pagination={true}>
        {users.map((user, id) => {
          return <CardTrainer user={user} key={id} />;
        })}
      </Carousel> */}
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
