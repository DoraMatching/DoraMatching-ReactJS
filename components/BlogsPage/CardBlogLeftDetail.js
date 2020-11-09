import Link from 'next/link';
import React, { Component } from 'react'
import PostDetail from '../CardPosts/PostDetail';
import PostComment from '../CardPosts/PostComment';
import styles from "./CardBlogPage.module.css";
import { Button, Form, Header } from 'semantic-ui-react';

function CardBlogLeftDetail({post, comments}) {
    return (
      <div className={styles.cardBlogsLeftDetail}>
        <div className={styles.cardBlogLeftHeader}>
          <p>
            <Link href="/posts">
              <a>
                <i className="fas fa-angle-double-left"></i>
                <span>All Blogs</span>
              </a>
            </Link>
          </p>
        </div>
        <PostDetail post={post} />
        <Header as="h3" dividing>
          {comments.length} Answers
        </Header>
        {comments.map((comment, id) => {
          return <PostComment comment={comment} key={id} />;
        })}
        <Form reply>
          <Form.TextArea />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </div>
    );
}

export default CardBlogLeftDetail;
