import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import styles from "./CardBlogPage.module.scss";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import MdEditor from "../MdEditor";
import Client from "../../services/Client";

function CreateBlog(props) {
  const router = useRouter();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
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

  const Create = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client("post", "POST", {
        title,
        subTitle,
        featuredImage,
        isDraft: true,
        content,
        tags: itemTags,
      }).then(({ data }) => {
        console.log("L32", data);
        setTitle("");
        setSubTitle("");
        setFeaturedImage("");
        setContent("");
        setTags([]);
        router.push("/posts");
      });
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

  const fileInputRef = React.createRef();
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
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Sub Title</label>
            <input
              placeholder="Subtitle"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Upload Image</label>
            <Form.Input
              placeholder="Image"
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
            />
            {/* <Button
              content="Choose Image"
              labelPosition="left"
              icon="image"
              onClick={() => fileInputRef.current.click()}
            />
            <input
              ref={fileInputRef}
              type="file"
              hidden
              onChange={this.fileChange}
            /> */}
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

export default CreateBlog;
