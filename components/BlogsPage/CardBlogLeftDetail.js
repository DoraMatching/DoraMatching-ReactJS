import Link from 'next/link';
import React, { Component, useState } from 'react'
import PostDetail from '../CardPosts/PostDetail';
import PostComment from '../CardPosts/PostComment';
import styles from "./CardBlogPage.module.scss";
import { Button, Form, Header } from 'semantic-ui-react';
import { useAuth } from '../../contexts/auth';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Client from '../../services/Client';

function CardBlogLeftDetail({post, comments}) {
  const { handleSubmit } = useForm();
  const {user, loading} = useAuth();
  const [content, setContent] = useState();
  const router = useRouter()
  const {id} = post;

  const onSubmit = (e, v) => {
    if(!user) router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`)
    else{
      Client(`post/${id}/comment`, 'POST', {content}).then(({data}) => {
        router.push(`${id}`)
        setContent('')
      });
    }
  }
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
          {comments.length} Answer{comments.length > 1 ? "s" : ""}
        </Header>
        {comments.map((comment, id) => {
          return <PostComment comment={comment} key={id} />;
        })}
        <Form reply onSubmit={onSubmit}>
          <Form.TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
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
