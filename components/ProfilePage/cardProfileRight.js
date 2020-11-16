import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tab, Button, Image, List } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import Class from "../CardClasses/Class";
import Schedule from "../Schedule/Schedule";
import styles from "./CardProfile.module.scss";

const CardProfileRight = ({ userAcc: { id } }) => {
  const { user } = useAuth();
  const renderPanes = async () => {
    const { data: currentUser } = await Client(`user/${id}`, "GET", {});
    return [
      {
        menuItem: "Blogs",
        render: () => (
          <Tab.Pane attached={false}>
            <List divided verticalAlign="middle">
              {currentUser.posts.map((post, index) => {
                return (
                  <List.Item
                    key={index}
                    style={{
                      marginBottom: "10px",
                      fontSize: "1.2rem",
                      fontFamily: "sans-serif, Roboto",
                    }}
                  >
                    <List.Content floated="right">
                      <Button>Edit</Button>
                      <Button color="red">Delete</Button>
                    </List.Content>
                    <List.Header>
                      <Link href={`/posts/${post.id}`}>
                        <a>{post.title}</a>
                      </Link>
                    </List.Header>
                  </List.Item>
                );
              })}
            </List>
          </Tab.Pane>
        ),
      },

      {
        menuItem: "Questions",
        render: () => (
          <Tab.Pane attached={false}>
            <List divided verticalAlign="middle">
              {currentUser.questions.map((question, index) => {
                return (
                  <List.Item
                    key={index}
                    style={{
                      marginBottom: "10px",
                      fontSize: "1.2rem",
                      fontFamily: "sans-serif, Roboto",
                    }}
                  >
                    <List.Content floated="right">
                      <Button>Edit</Button>
                      <Button color="red">Delete</Button>
                    </List.Content>
                    <List.Header>
                      <Link href={`/questions/${question.id}`}>
                        <a>{question.title}</a>
                      </Link>
                    </List.Header>
                    <List.Content>{question.content}</List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Classes",
        render: () => (
          <Tab.Pane attached={false}>
            <Class />
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Schedule",
        render: () => (
          <Tab.Pane attached={false}>
            <Schedule />
          </Tab.Pane>
        ),
      },
    ];
  };

  const [panes, setPanes] = useState([]);

  useEffect(() => {
    renderPanes().then((components) => setPanes(components));
  }, []);

  return <Tab menu={{ secondary: true }} panes={panes} />;
};

export default CardProfileRight;
