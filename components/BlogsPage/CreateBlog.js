import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import styles from "./CardBlogPage.module.css";
import {useRouter} from 'next/router';
import axios from 'axios';

function CreateBlog(props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({title: '', content: ''});
  return (
    <Modal
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className={styles.tagBlog}>+ Create a Blog</button>}
    >
      <Modal.Header>Create Blog</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Title" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Sub Title</label>
            <input placeholder="Subtitle" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Tags</label>
            <input placeholder="tags" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Content</label>
            <input />
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
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreateBlog;