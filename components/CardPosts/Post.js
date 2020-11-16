import React from "react";
import styles from "./Post.module.css";
import Link from "next/link";
import { Button, Grid, Icon, Popup } from "semantic-ui-react";
import moment from "moment";
import { useAuth } from "../../contexts/auth";

const Post = ({ post }) => {
  const { user } = useAuth();
  const { id } = post;
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
          <h3 className={styles.postTitleContent}>
            <Link href={`/posts/${id}`}>
              <a>{post.title}</a>
            </Link>
          </h3>
          <span className={styles.postAuthor}>
            <span>
              <Link href={`/profile/${post.author.id}`}>
                <a>{post.author.name}</a>
              </Link>
            </span>{" "}
            <p>published {moment(post.createdAt).format("ll")}</p>
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
          {user && user.id && post.author.id === user.id ? (
            <Popup
              position="bottom center"
              wide
              trigger={<i className="fas fa-ellipsis-h"></i>}
              on="click"
            >
              <Grid columns="equal">
                <Grid.Column>
                  <Button color="grey" animated="vertical">
                    <Button.Content visible>Edit</Button.Content>
                    <Button.Content hidden>
                      <Icon name="edit" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button color="red" animated="vertical">
                    <Button.Content visible>Delete</Button.Content>
                    <Button.Content hidden>
                      <Icon name="delete" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid>
            </Popup>
          ) : (
            ""
          )}
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
            <Link href={`/posts/${id}`}>
              <a>
                <i className="fa fa-chevron-right"></i> Read more
              </a>
            </Link>
          </button>
          <div className={styles.faTag}>
            <i className="fa fa-tag"></i>
            <span>
              {post.tags.map((tag, id) => {
                return (
                  <Link href="/" key={id}>
                    <a> {tag.name}</a>
                  </Link>
                );
              })}
            </span>
          </div>
        </div>
        <div className={styles.postMeta}>
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
