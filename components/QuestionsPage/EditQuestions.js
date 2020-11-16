import React, { useState, useEffect } from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import styles from "./CardQuestionPage.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import EditButton from "../CardQuestions/EditButton";

function EditQuestion({ questions }) {
  const router = useRouter();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [title, setTitle] = useState("");
  const [tags, setTag] = useState([]);

  const Update = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client(`question/${questions.id}`, "PUT", {
        title,
        content,
        tags: [name],
      }).then(({ data }) => {
        console.log("L21", data);
        setTitle("");
        setContent("");
        setTag([{ name: "" }]);
        router.push("/questions");
      });
    }
  };
  return (
    <Modal
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="grey" animated="vertical">
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name="edit" />
          </Button.Content>
        </Button>
      }
    >
      <Modal.Header>Update Question</Modal.Header>
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
            <input
              placeholder="tags"
              value={tags}
              onChange={(e) => setTag(e.target.value)}
            />
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
          content="Update"
          labelPosition="left"
          icon="checkmark"
          onClick={(e) => {
            Update(e), setOpen(false);
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default EditQuestion;
