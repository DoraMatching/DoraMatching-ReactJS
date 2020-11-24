import moment from "moment";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Post.module.scss";

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
          <p className={styles.postDetailTime1}>
            {moment(post.createdAt).format("MMM")}
          </p>
          <p className={styles.postDetailTime2}>
            {moment(post.createdAt).format("D")}
          </p>
          <p className={styles.postDetailTime3}>
            {moment(post.createdAt).format("YYYY")}
          </p>
        </div>
        <div className={styles.postDetailContent}>
          <h3>{post.title}</h3>
          <div className={styles.postDetailContentAuthor}>
            <p>
              <span style={{ fontWeight: "bold" }}>Posted By: </span>
              <Link href={`/profile/${post.author.id}`}>
                <a>{post.author.name}</a>
              </Link>{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Comment: </span>
              {post.comments.length}{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Tags: </span>
              {post.tags.map((tag, id) => {
                return (
                  <Link href="/" key={id}>
                    <a> {tag.name}</a>
                  </Link>
                );
              })}
            </p>
          </div>
          <div style={{ fontStyle: "italic", marginBottom: "20px" }}>
            <ReactMarkdown>{post.subTitle}</ReactMarkdown>
          </div>
          <ReactMarkdown>{post.content}</ReactMarkdown>
          {/* <div className={styles.postMeta}>
            <div className="extra content">
              <div
                className="ui right labeled button"
                data-variation="tiny"
                tabIndex="0"
              >
                <div className="ui gray icon tiny button">
                  <i className="thumbs outline up large icon"></i>
                </div>
                <a className="ui basic gray left pointing label">20 likes</a>
              </div>
              <div
                className="ui left labeled right floated button"
                data-variation="tiny"
                tabIndex="0"
              >
                <a className="ui basic red right pointing label">2 shares</a>
                <div className="ui red icon tiny button">
                  <i className="external fa-comments-o large icon"></i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default PostDetail;
