import React, { useState, useEffect } from "react";
import { Button, Dropdown, Form, Modal } from "semantic-ui-react";
import styles from "./CardQuestionPage.module.scss";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import MdEditor from "../MdEditor";
import _ from "lodash";

function CreateQuestion({ questions }) {
  const router = useRouter();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [itemTags, setItemTags] = useState([]);

  console.log("L21", content);
  console.log("L22", tags);
  useEffect(() => {
    setItemTags(
      tags.map((item) => {
        return {
          name: item,
        };
      })
    );
  }, [tags]);

  const Create = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client("question", "POST", { title, content, tags: itemTags }).then(
        ({ data }) => {
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
    if (newValue !== "")
      Client("tag-predict", "POST", { predict: newValue }).then(({ data }) => {
        setTags(_.uniq([...tags, ...data.results]));
      });
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
          <Form.Field required>
            <label>Title</label>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field required>
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
          </Form.Field>
          <Form.Field required>
            <label>Content</label>
            <MdEditor value={content} onChange={handleEditorChange} />
          </Form.Field>
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
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default CreateQuestion;
