import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./CardTrainers.module.css";

function CardTrainersRight({ users }) {
  const router = useRouter();

  return (
    <div className={styles.cardTrainerPageChoose}>
      <p>
        <span>Find a Trainer</span> & Choose a Class Today.
      </p>
      <img src="/static/ct-1.jpg" alt="ct1" width="100%" />
      <button className={styles.cardTrainerPageButtonChoose} color="teal">
        <Link href="/classes">
          <a>Choose A Class</a>
        </Link>
      </button>
    </div>
  );
}

export default CardTrainersRight;
