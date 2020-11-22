import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import Client from "../../services/Client";
import styles from "./CardTrainers.module.css";

function CardTrainersRight({ users }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [trainerProfile, setTrainerProfile] = useState("");

  const Confirm = () => {
    Client("trainer/register", "POST", { trainerProfile })
      .then(({ data }) => {
        setTrainerProfile("");
        router.push("/trainers");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.cardTrainerPageRight}>
      <Modal
        size="tiny"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <button className={styles.cardTrainerPageButton} color="teal">
            Become a Trainer
          </button>
        }
      >
        <Modal.Header>Register Trainer</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field required>
              <label>Link Your CV</label>
              <input
                required
                value={trainerProfile}
                onChange={(e) => setTrainerProfile(e.target.value)}
              />
            </Form.Field>
            <Button
              content="Confirm"
              labelPosition="left"
              icon="checkmark"
              onClick={(e) => {
                Confirm(e), setOpen(false);
              }}
              positive
            />
          </Form>
        </Modal.Content>
      </Modal>

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
