import React, { Component } from "react";
import styles from "./Post.module.css";

class Post extends Component {
  render() {
    return (
      <div className={styles.postCard}>
        <div className={styles.postHeader}>
          <div className={styles.postThumb}>
            <figure className={styles.postThumbImage}>
              <img
                src="/static/iconBlog.png"
                alt="iconBlog"
                style={{ width: "45px" }}
              />
            </figure>
          </div>
          <div className={styles.postTitle}>
            <h3 className={styles.postTitleContent}>
              What's the best way to implement a 2D interval search in C++?
            </h3>
            <span className={styles.postAuthor}>
              <span>Christian</span> <p>published Oct 01 2020</p>
            </span>
          </div>
        </div>
        <div className={styles.postImage}>
          <img
            src="/static/imageBlog.png"
            alt="imageBlog"
            style={{ width: "100%" }}
          />
        </div>
        <div className="postContent">
          <p className={styles.postDescript}>
            We can make table scrollable by adding table-responsive class to it,
            but how can we can make table scrollable by adding table-responsive
            class...
          </p>
          <div className={styles.postMore}>
            <button className={styles.buttonPrimary}>
              <i className="fa fa-chevron-right"></i> Read more
            </button>
            <div className={styles.faTag}>
              <i className="fa fa-tag">
              </i>
              <span>C++</span>
            </div>
          </div>
          <div className={styles.postMeta}>
            <button className={`${styles.postMetaCommon} ${styles.postMetaLike}`}>
              <i className="far fa-thumbs-up"> </i>
              <span>25 likes</span>
            </button>
            <button className={`${styles.postMetaCommon} ${styles.postMetaComment}`}>
              <i className="far fa-comment"></i>
              <span>25 comments</span>
            </button>
            <button className={`${styles.postMetaCommon} ${styles.postMetaShare}`}>
              <i className="far fa-share"></i>
              <span>25 shares</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
