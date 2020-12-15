import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import SearchTrainer from "../SearchModule/SearchTrainer";
import CardTrainerPage from "./CardTrainerPage/CardTrainerPage";

import styles from "./CardTrainers.module.css";

function CardTrainersLeft({ users }) {
  const breakPoints = [{ width: 200, itemsToShow: 3 }];
  const [open, setOpen] = React.useState(false);

  const [trainerProfile, setTrainerProfile] = useState("");
  const router = useRouter()
  const { user } = useAuth();

  const Confirm = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client("trainer/register", "POST", { trainerProfile })
        .then(({ data }) => {
          setTrainerProfile("");
          router.push("/trainers");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 className={styles.cardTrainersLefHeader}>All Trainers</h3>
        <SearchTrainer />
        {user && user.roles.indexOf("TRAINER") !== -1 ? (
          ""
        ) : (
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
          </div>
        )}
      </div>

      <div className={styles.cardTrainersLeftDetail}>
        {users.map((user, id) => {
          return <CardTrainerPage user={user} key={id} />;
        })}
      </div>
    </>
  );
}

export default CardTrainersLeft;
