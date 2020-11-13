import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import styles from "./CardQuestionPage.module.css";
import {useRouter} from 'next/router';
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";

function CreateQuestion({questions}) {
  const router = useRouter()
  const {user} = useAuth()
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('')

  const onsubmit = () => {
    if(!user) router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client('question', 'POST', {title, content}).then(({data}) => {
        console.log(data)
        setTitle('')
        setContent('')
        router.push('/questions')
      });
    }
  }

  return (
    <Modal
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className={styles.askQuestion}>+ Ask a Question</button>}
    >
      <Modal.Header>Create Question</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Tags</label>
            <input placeholder="tags" />
          </Form.Field>
          <Form.Field>
            <label>Content</label>
            <Form.TextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="youtube"
          content="Cancel"
          icon="close"
          onClick={() => setOpen(false)}
        />
        <Button
          content="Publish"
          labelPosition="left"
          icon="checkmark"
          onClick={(e) =>  {onsubmit(e), setOpen(false)}}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreateQuestion;
