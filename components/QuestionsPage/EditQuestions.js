import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import styles from "./CardQuestionPage.module.scss";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import MdEditor from "../MdEditor";

function EditQuestion({ question }) {
  const router = useRouter();
  const { user } = useAuth();
  const [content, setContent] = useState(question.content);
  const [title, setTitle] = useState(question.title);
  const [tags, setTags] = useState(question.tags.map((item) => item.name));
  const [itemTags, setItemTags] = useState([]);

  useEffect(() => {
    setItemTags(
      tags.map((item) => {
        return {
          name: item,
        };
      })
    );
  }, [tags]);

  const Update = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client(`question/${question.id}`, "PATCH", {
        title,
        content,
        tags: itemTags,
      }).then(({ data }) => {
        setTitle("");
        setContent("");
        setTags([""]);
        router.push("/questions");
      });
    }
  };

  const handleEditorChange = ({ html, text }) => {
    
    const newValue = text.replace(/\d/g, "");
    setContent(newValue);
    Client('tag-predict', "POST", {predict: newValue}).then(
      ({data}) => {
        setTags([...tags, ...data.results])
      }
    );
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
    <Form>
      <h1>Edit Your Question</h1>
      <Form.Field>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
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
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          />
        </div>
      </Form.Field>
      <Form.Field>
        <label>Content</label>
        <MdEditor value={content} onChange={handleEditorChange} />
      </Form.Field>
      <Button
        color="youtube"
        content="Cancel"
        icon="close"
      />
      <Button
        content="Update"
        labelPosition="left"
        icon="checkmark"
        onClick={(e) => {
          Update(e);
        }}
        positive
      />
    </Form>
  );
}

export default EditQuestion;
