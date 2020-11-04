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
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className={styles.cardTopicsLeftButton}>Create Class</button>
      }
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title Class</label>
            <input placeholder="Name" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Description</label>
            <input placeholder="description class" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Feature Image</label>
            <input placeholder="feature image" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Topic</label>
            <Dropdown placeholder='Choose Topic' fluid multiple selection options={options} />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Time Start</label>
            <input type="date" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Time End</label>
            <input type="date" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="youtube" content="Cancel" icon="close"  onClick={() => setOpen(false)} />
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
