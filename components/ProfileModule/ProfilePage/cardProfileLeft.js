import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Popup } from "semantic-ui-react";
import { useAuth } from "../../../contexts/auth";
import Client from "../../../services/Client";
import styles from "./CardProfile.module.scss";

function CardProfileLeft({ userAcc, trainers }) {
  console.log("trainers", trainers);

  console.log("usss", userAcc);
  const { user } = useAuth();

  // const userLogined = user && user.id === trainers.user.id
  const [email, setEmail] = useState(userAcc.email || "");
  const [phoneNumber, setPhoneNumber] = useState(userAcc.phoneNumber || "")
  const [classesTrainer, setClassesTrainer] = useState("")

  const getData = async () => {
    const {data: currentUserItem} = await Client(
      `trainer?userId=${userAcc.id} `,
      "GET"
    );
    setClassesTrainer(currentUserItem);
    console.log("L25", currentUserItem);
  }

  useEffect(() => {
    if (user) setEmail(user.email);
    getData()
  }, [user]);
  
  return (
    <div>
      <div className={styles.cardProfileLeftWrapper}>
        {user && user.id && user.id === userAcc.id ? (
          <div className={styles.topIcons}>
            <Link href={`/profile/${userAcc.id}/settings`}>
              <a>
                <Popup
                  trigger={<i className="fas fa-cogs"></i>}
                  content="Setting profile"
                  basic
                />
              </a>
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className={styles.profile}>
          <img
            src={userAcc.avatarUrl}
            alt="avatar"
            className={styles.thumbnail}
          />
          <h3 className={styles.name}>
            <Link href={`/profile/${userAcc.id}`}>
              <a>{userAcc.name}</a>
            </Link>
          </h3>
          <p className={styles.title}> {email} </p>
          <p className={styles.description}>{phoneNumber}</p>
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.icon}>
            <h4>{userAcc.posts.length}</h4>
            <p>Blogs</p>
          </div>
          <div className={styles.icon}>
            <h4> {classesTrainer && classesTrainer.classes.length} </h4>
            <p>Classes</p>
          </div>
          <div className={styles.icon}>
            <h4>{userAcc.questions.length}</h4>
            <p>Questions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfileLeft;
