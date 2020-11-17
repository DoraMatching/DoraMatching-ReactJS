import React, { useState, useEffect } from "react";
import { Button, Dropdown, Form, Modal } from "semantic-ui-react";
import styles from "./CardQuestionPage.module.scss";
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
  const [tags, setTags] = useState([]);
  const [itemTags, setItemTags] = useState([]);

  useEffect(() => {
    setItemTags(tags.map((item) => {
      return {
        name: item
      }}))
  }, [tags]); 
 
  console.log("L28", itemTags);

  const Create = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client("question", "POST", { title, content, tags:itemTags }).then(
        ({ data }) => {
          console.log("L21", data);
          setTitle("");
          setContent("");
          setTags([]);
          router.push("/questions");
        }
      );
    }
  };

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, "");
    setContent(newValue);
  };

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
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
            <div className={styles.tagsInput}>
              <ul className={styles.tags}>
                {tags.map((tag, index) => (
                  <li key={index} className={styles.tag}>
                    <span className={styles.tagTitle}>{tag}</span>
                    <span
                      className={styles.tagCloseIcon}
                      onClick={() => removeTags(index)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                onKeyUp={(event) =>
                  event.key === "Enter" ? addTags(event) : null
                }
                placeholder="Press enter to add tags"
              />
            </div>
            {/* <input
              placeholder="tags"
              value={tags}
              onChange={(e) => setTag(e.target.value)}
            /> */}
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
