import Link from "next/link";
import React from "react";
import styles from "./CardBlogPage.module.scss";

export default function CardBlogRightDetail({ post }) {
  console.log("l6", post);
  return (
    <div className={styles.cardBlogRightDetail}>
      <div className={styles.ourTeam}>
        <div className={styles.picture}>
          <img className="img-fluid" src={post.author.avatarUrl} />
        </div>
        <div className={styles.teamContent}>
          <h3 className={styles.name}>{post.author.name}</h3>
        </div>
        <div className={styles.topTrainerButton}>
          <button className={styles.primary}>
            <Link href={`/profile/${post.author.id}`}>
              <a>View Profile</a>
            </Link>
          </button>
        </div>
        {/* <ul className={styles.social}>
            <button className={styles.button}> </button>
          </ul> */}
      </div>
    </div>
  );
}
