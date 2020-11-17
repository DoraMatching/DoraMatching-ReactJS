import React, { useEffect, useState } from "react";
import { Button, Form, Input, Tab } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";

const fileInputRef = React.createRef();

const CardProfileSetting = ({ userAcc }) => {
  const { user } = useAuth();
  const allowEdit = user && user.id === userAcc.id;

  const [name, setName] = useState(userAcc.name)
  const [username, setUsername] = useState(userAcc.username)
  const [email, setEmail] = useState(userAcc.email)

  const Update =  () => {
    if (!user)
      router.push(`/sign-in?forward=${encodeURIComponent(router.asPath)}`);
    else {
      Client(`user/${userAcc.id}`, "PATCH", {
        username,
        email,
        avatarUrl,
        password,
        oldPassword,
      }).then(({ data }) => {
        console.log("L21", data);
        setTitle("");
        setContent("");
        setTags([""]);
        router.push("/questions");
      });
    }
  };

  const renderPanes = async () => {
    return [
      {
        menuItem: "Change Profile",
        render: () => (
          <Tab.Pane attached={false}>
            <Form unstackable>
              <Form.Group widths={2}>
                <Form.Input
                  label="Email"
                  value={email}
                  disabled
                />
                <Form.Input
                  label="Username"
                  value={username}
                  disabled
                />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="Name" placeholder="name" value={name} />
                <Form.Input label="Phone number" placeholder="phone" />
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
  };

  const [panes, setPanes] = useState([]);

  useEffect(() => {
    renderPanes().then((components) => setPanes(components));
  }, [allowEdit]);

  return <Tab menu={{ secondary: true }} panes={panes} />;
};

export default CardProfileSetting;
