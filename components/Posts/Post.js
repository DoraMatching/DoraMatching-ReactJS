import React from "react";
import styles from "./Post.module.css";
import fetch from "isomorphic-unfetch";

const Post = ({ post }) => {
  // console.log('LOGGG',posts)
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        <div className={styles.postThumb}>
          <figure className={styles.postThumbImage}>
            <img
              src={"/static/iconBlog.png"}
              alt="iconBlog"
              style={{ width: "45px" }}
            />
          </figure>
        </div>
        <div className={styles.postTitle}>
          <h3 className={styles.postTitleContent}>{post.title}</h3>
          <span className={styles.postAuthor}>
            <span>{post.author.name}</span> <p>published {post.createdAt}</p>
          </span>
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
              {post.tags
                .map((tag) => {
                  return tag.name;
                })
                .join(", ")}
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

Post.getInitialProps = async () => {
  const res = await fetch("https://");
};

export default Post;
