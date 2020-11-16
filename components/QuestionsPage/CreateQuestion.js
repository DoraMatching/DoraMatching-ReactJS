import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import styles from "./CardQuestionPage.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import MdEditor from "../MdEditor";

function CreateQuestion({ questions }) {
  const router = useRouter();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTag] = useState([]);

  const Create = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client("question", "POST", { title, content, tags: [name] }).then(
        ({ data }) => {
          console.log("L21", data);
          setTitle("");
          setContent("");
          setTag([{ name: "" }]);
          router.push("/questions");
        }
      );
    }
  };
  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, "");
    setContent(newValue);
  };
  return (
    <Modal
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className={styles.askQuestion}>+ Create Question</button>
      }
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
            <input
              placeholder="tags"
              value={tags}
              onChange={(e) => setTag(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Content</label>
            <MdEditor value={content} onChange={handleEditorChange} />
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
          onClick={(e) => {
            Create(e), setOpen(false);
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreateQuestion;
