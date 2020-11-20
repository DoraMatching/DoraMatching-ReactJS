import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tab, Button, Image, List, ListContent } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import Class from "../CardClasses/Class";
import Schedule from "../Schedule/Schedule";
import styles from "./CardProfile.module.scss";

const CardProfileRight = ({ userAcc }) => {
  const { user } = useAuth();
  const allowEdit = user && user.id === userAcc.id;

  const renderPanes = async () => {
    const { data: currentUser } = await Client(`user/${userAcc.id}`, "GET", {});
    return [
      {
        menuItem: { key: 'blogs', icon: 'blogger', content: 'Blogs' },
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
                    {allowEdit ? (
                      <List.Content floated="right">
                        <Button>Edit</Button>
                        <Button color="red">Delete</Button>
                      </List.Content>
                    ) : (
                      ""
                    )}

                    <List.Header>
                      <Link href={`/posts/${post.id}`}>
                        <a>{post.title}</a>
                      </Link>
                      <List.Description className={styles.ListDescription}>
                        {post.subTitle}
                      </List.Description>
                    </List.Header>
                  </List.Item>
                );
              })}
            </List>
          </Tab.Pane>
        ),
      },
      {
        menuItem: { key: 'question', icon: 'question circle', content: 'Questions' },
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
                    {allowEdit ? (
                      <List.Content floated="right">
                        <Button>Edit</Button>
                        <Button color="red">Delete</Button>
                      </List.Content>
                    ) : (
                      ""
                    )}

                    <List.Header>
                      <Link href={`/questions/${question.id}`}>
                        <a>{question.title}</a>
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
        menuItem: { key: 'classes', icon: 'student', content: 'Classes' },
        render: () => (
          <Tab.Pane attached={false}>
            <Class />
          </Tab.Pane>
        ),
      },
      {
        menuItem: { key: 'schedule', icon: 'calendar outline', content: 'Schedule' },
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
  }, [allowEdit]);

  return <Tab menu={{ secondary: true }} panes={panes} />;
};

export default CardProfileRight;
