import React from "react";
import styles from "./Post.module.css";
import Link from "next/link";
import moment from "moment";

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
            <span>{post.author.name}</span>{" "}
            <p>published {moment(post.createdAt).format("LLL")}</p>
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
          <div className="extra content">
            <div
              className="ui right labeled button"
              data-variation="tiny"
              tabindex="0"
            >
              <div className="ui red icon tiny button">
                <i className="thumbs outline up large icon"></i>
              </div>
              <a className="ui basic red left pointing label">20 likes</a>
            </div>
            <div
              className="ui left labeled right floated button"
              data-variation="tiny"
              tabindex="0"
            >
              <a className="ui basic red right pointing label">2 shares</a>
              <div className="ui red icon tiny button">
                <i className="external share large icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
