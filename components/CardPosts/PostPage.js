import React from "react";
import styles from "./Post.module.scss";
import Link from "next/link";
import { Button, Dropdown, Icon } from "semantic-ui-react";
import moment from "moment";

function PostPage({ post }) {
  const { id } = post;
  return (
    <div className={styles.blogPostPage}>
      <div className={styles.blogPostWrapper}>
        <div className={styles.blogPostMedia}>
          <div className={styles.blogPostMediaPart}>
            <img
              src={post.featuredImage}
              alt=""
            />
          </div>
        </div>
        <div className={styles.blogPostContent}>
          <div className={styles.metaWrapper}>
            <span className={styles.datePost}>
              <span className={styles.month}>{moment(post.createdAt).format("MMM")}</span>
              <span className={styles.day}>{moment(post.createdAt).format("D")}</span>
            </span>
          </div>
          <div className={styles.blogPostMetaWrap}>
            <div className={styles.postCatsAuthor}>
              <span className={styles.blogPostMetaCategories}>
                Publish by
              </span>
              <span className={styles.authorPost}>
                <Link href={`/profile/${post.author.id}`}>
                <a>{post.author.name}</a>
              </Link>
              </span>
            </div>
          </div>
          <h3 className={styles.blogPostTitle}>
            <Link href={`/posts/${id}`}>
              <a>{post.title}</a>
            </Link>
          </h3>
          {/* <p>{post.subTitle}</p> */}
          <div className={styles.blogPostMetaDesc}>
            <div className={styles.readMoreWrap}>
            <Link href={`/posts/${id}`}>
              <a>
                <i className="fa fa-chevron-right"></i> Read more
              </a>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
