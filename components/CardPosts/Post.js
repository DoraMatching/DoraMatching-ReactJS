import React from "react";
import styles from "./Post.module.css";
import Link from "next/link";
import moment from 'moment'

const Post = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        <div className={styles.postAva}>
          <figure className={styles.postThumbImage}>
            <img
              src={post.author.avatarUrl}
              alt="iconAuthor"
              style={{ width: "40px", borderRadius: "50%" }}
            />
          </figure>
        </div>
        <div className={styles.postTitle}>
          <h3 className={styles.postTitleContent}>{post.title}</h3>
          <span className={styles.postAuthor}>
            <span>{post.author.name}</span> <p>published {moment(post.createdAt).format("LLL")}</p>
          </span>
        </div>
        <div className={styles.postThumb}>
          <figure className={styles.postThumbImage}>
            <img
              src={"/static/iconBlog.png"}
              alt="iconBlog"
              style={{ width: "30px" }}
            />
          </figure>
        </div>
      </div>
      <div className={styles.postImage}>
        <img
          src={post.featuredImage}
          alt="imageBlog"
          style={{ width: "100%" }}
        />
      </div>
      <div className="postContent">
        <p className={styles.postDescript}>{post.subTitle}</p>
        <div className={styles.postMore}>
          <button className={styles.buttonPrimary}>
            <i className="fa fa-chevron-right"></i> Read more
          </button>
          <div className={styles.faTag}>
            <i className="fa fa-tag"></i>
            <span>
              <Link href="/">
                {post.tags
                  .map((tag) => {
                    return tag.name;
                  })
                  .join(", ")}
              </Link>
            </span>
          </div>
        </div>
        <div className={styles.postMeta}>
          <button className={`${styles.postMetaCommon} ${styles.postMetaLike}`}>
            <i className="far fa-thumbs-up"> </i>
            <span>25 likes</span>
          </button>
          <button
            className={`${styles.postMetaCommon} ${styles.postMetaComment}`}
          >
            <i className="far fa-comment"></i>
            <span>25 comments</span>
          </button>
          <button
            className={`${styles.postMetaCommon} ${styles.postMetaShare}`}
          >
            <i className="far fa-share"></i>
            <span>25 shares</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Post;
