import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "semantic-ui-react";
import Client from "../../services/Client";
import DatePickerPage from "../DatePicker";
import styles from "./CardTopicsPage.module.scss";

const options = [];

function CreateClass(props) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [options, setOptions] = useState([]);

  const GetTopic = async () => {
    let { data } = await Client("topics", "GET");
    data = data.items;
    console.log("L22", data);
    return data.map((e) => {
      return {
        key: e.id,
        text: e.name,
        value: e.name,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setOptions(await GetTopic());
    };
    fetchData();
  }, []);

  const Create = () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client("classe", "POST", {
        name,
        description,
        featuredImage,
        duration,
        startTime,
        endTime,
      }).then(({ data }) => {
        setName("");
        setDescription("");
        setFeaturedImage("");
        setDuration(0);
        router.push("/classes");
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
        <button className={styles.cardTopicsLeftButton}>Create Class</button>
      }
    >
      <Modal.Header>Create Class</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Topic</label>
              <Dropdown
                placeholder="Choose Topic"
                fluid
                search
                selection
                options={options}
                onChange={e => setOptions(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Sessions</label>
              <input
                placeholder="number of sessions"
                value={duration}
                type="number"
                onChange={e => setDuration(e.target.value)}
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
              <input placeholder="description class" value={description} onChange={e => setDescription(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Image</label>
              <input placeholder="feature image" value={featuredImage} onChange={e => setFeaturedImage(e.target.value)} />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Time Start</label>
              <DatePickerPage />
            </Form.Field>
            <Form.Field>
              <label>Time End</label>
              <DatePickerPage />
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
