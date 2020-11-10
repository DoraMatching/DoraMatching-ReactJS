import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Carousel from "react-elastic-carousel";
import CardTrainerPage from "../CardTrainerPage/CardTrainerPage";
import styles from "./CardTrainers.module.css";

function CardTrainersRight({ users }) {
  const [open, setOpen] = React.useState(false);
  const breakPoints = [{ width: 200, itemsToShow: 3 }];

  return (
    <div className={styles.cardTrainerPageRight}>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <button className={styles.cardTrainerPageButtonTop} color="linkedin">
            <i className="user icon"></i> Top Trainer
          </button>
        }
      >
        <Modal.Content>
          <Carousel
            breakPoints={breakPoints}
            showArrows={true}
            pagination={true}
          >
            {users.map((user, id) => {
              return <CardTrainerPage user={user} key={id} />;
            })}
          </Carousel>
        </Modal.Content>
      </Modal>
      <button className={styles.cardTrainerPageButton} color="teal">
        Become a Trainer
      </button>
      <div className={styles.cardTrainerPageChoose}>
        <p>
          <span>Find a Trainer</span> & Choose a Class Today.
        </p>
        <img src="/static/ct-1.jpg" alt="ct1" width="100%" />
        <button className={styles.cardTrainerPageButtonChoose} color="teal">
          Choose A Class
        </button>
      </div>
    </div>
  );
}

export default CardTrainersRight;
