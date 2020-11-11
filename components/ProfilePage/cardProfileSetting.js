import React from 'react';
import { Button, Form, Input, Tab } from 'semantic-ui-react';

const fileInputRef = React.createRef();

const panes = [
  {
    menuItem: "Change Profile",
    render: () => (
      <Tab.Pane attached={false}>
        <Form unstackable>
          <Form.Group widths={2}>
            <Form.Input
              label="Email"
              placeholder="email"
              value="abc"
              disabled
            />
            <Form.Input
              label="Username"
              placeholder="username"
              value="abc"
              disabled
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Name" placeholder="name" required />
            <Form.Input label="Phone number" placeholder="phone" required />
          </Form.Group>
          <Form.Field>
            <Button
              content="Choose Image"
              labelPosition="left"
              icon="image"
              onClick={() => fileInputRef.current.click()}
            />
            <input
              ref={fileInputRef}
              type="file"
              hidden
              // onChange={this.fileChange}
            />
            <Button type="submit">Upload</Button>
          </Form.Field>
          <Button color="linkedin" type="submit">
            Submit
          </Button>
        </Form>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Change Password",
    render: () => (
      <Tab.Pane attached={false}>
        <Form>
          <Form.Field required>
            <label>Old Password</label>
            <Input placeholder="old pass" required />
          </Form.Field>
          <Form.Field required>
            <label>New Password</label>
            <Input placeholder="new pass" required />
          </Form.Field>
          <Form.Field required>
            <label>Repeat New Password</label>
            <Input placeholder="repeat new pass" required />
          </Form.Field>
          <Button color="linkedin" type="submit">
            Confirm
          </Button>
        </Form>
      </Tab.Pane>
    ),
  },
];

const CardProfileSetting = () => <Tab menu={{ secondary: true }} panes={panes} />

export default CardProfileSetting;