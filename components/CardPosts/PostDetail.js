import React from "react";
import styles from "./Post.module.css";
import Link from "next/link";
import moment from "moment";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postImage}>
        <img
          src={post.featuredImage}
          alt="imageBlog"
          style={{ width: "100%" }}
        />
      </div>
      <div className={styles.postDetailBody}>
        <div className={styles.postDetailTime}>
          {moment(post.createdAt).format("LLL")}
        </div>
        <div className={styles.postDetailContent}>
          <h3 className={styles.postTitleContent}>{post.title}</h3>
          <div className={styles.postDetailContentAuthor}>
            <p>Posted By {post.author.name} </p>
            <p>Comments {post.comments.length} </p>
            <p>
              Tags
              <Link href="/">
                {post.tags
                  .map((tag) => {
                    return tag.name;
                  })
                  .join(", ")}
              </Link>
            </p>
          </div>
          <div>{post.content}</div>
          <div className={styles.postMeta}>
            <div className="extra content">
              <div
                className="ui right labeled button"
                data-variation="tiny"
                tabIndex="0"
              >
                <div className="ui red icon tiny button">
                  <i className="thumbs outline up large icon"></i>
                </div>
                <a className="ui basic red left pointing label">20 likes</a>
              </div>
              <div
                className="ui left labeled right floated button"
                data-variation="tiny"
                tabIndex="0"
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
    </div>
  );
};
export default PostDetail;
