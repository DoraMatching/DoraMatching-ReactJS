import Link from "next/link";
import React from "react";
import { Popup } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import Class from "../CardClasses/Class";
import styles from "./CardProfile.module.scss";

function CardProfileLeft({ userAcc }) {
  const { user, loading, logout } = useAuth();
  return (
    <div>
      <div className={styles.cardProfileLeftWrapper}>
        {(true || user.id === userAcc.id) ? <div className={styles.topIcons}>
          <Link href={`/profile/${userAcc.id}/settings`}>
            <a>
              <Popup
                trigger={<i className="fas fa-cogs"></i>}
                content="Setting profile"
                basic
              />
            </a>
          </Link>
        </div> : ''}
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
          <p className={styles.title}>Javascript Developer</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.icon}>
            <h4>{userAcc.posts.length}</h4>
            <p>Blogs</p>
          </div>
          <div className={styles.icon}>
            <h4>12</h4>
            <p>Classes</p>
          </div>
          <div className={styles.icon}>
            <h4>{userAcc.questions.length}</h4>
            <p>Questions</p>
          </div>
        </div>
      </div>

      <div className={styles.cardProfileLeftUnder}>
        <Class />
      </div>
    </div>
  );
}

export default CardProfileLeft;
