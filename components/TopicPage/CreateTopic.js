import React, { useState } from "react";
import { Button, Dropdown, Form, Modal } from "semantic-ui-react";
import styles from "./CardTopicsPage.module.scss";

const options = [
  { key: "react", text: "React", value: "react" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
];

function CreateTopic(props) {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className={styles.cardCreateTopicsLeftButton}>
          Create Topic
        </button>
      }
    >
      <Modal.Header>Create Topic</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Name" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder="description class" />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input placeholder="feature image" />
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
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreateTopic;
