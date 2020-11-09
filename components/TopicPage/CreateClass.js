import React, {useState} from "react";
import { Button, Dropdown, Form, Modal } from "semantic-ui-react";
import styles from "./CardTopicsPage.module.css";

const options = [
  { key: 'react', text: 'React', value: 'react' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
]

function CreateClass(props) {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      size='small'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className={styles.cardTopicsLeftButton}>Create Class</button>
      }
    >
      <Modal.Header>Create Class</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Title</label>
              <input placeholder="Name" />
            </Form.Field>
            <Form.Field>
              <label>Topic</label>
              <Dropdown
                placeholder="Choose Topic"
                fluid
                search
                selection
                options={options}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Description</label>
              <input placeholder="description class" />
            </Form.Field>
            <Form.Field>
              <label>Image</label>
              <input placeholder="feature image" />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Time Start</label>
              <input type="date" />
            </Form.Field>
            <Form.Field>
              <label>Time End</label>
              <input type="date" />
            </Form.Field>
          </Form.Group>
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

export default CreateClass;
