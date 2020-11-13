import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import Class from "../CardClasses/Class";
import Schedule from "../Schedule/Schedule";
import styles from "./CardProfile.module.scss";

const CardProfileRight = ({ userAcc: { id } }) => {
  const renderPanes = async () => {
    const { data: currentUser } = await Client(`user/${id}`, "GET", {});
    return [
      {
        menuItem: "Blogs",
        render: () => (
          <Tab.Pane attached={false}>
            {currentUser.posts.map((post, index) => {
              return (
                post.length === 0 ? <p>{post.length} Blog </p> :
                <div
                  style={{
                    marginBottom: "10px",
                    fontSize: "1.2rem",
                    fontFamily: "sans-serif, Roboto",
                  }}
                >
                  <Link key={index} href={`/questions/${post.id}`}>
                    <a>{post.title}</a>
                  </Link>
                </div>
              );
            })}
          </Tab.Pane>
        ),
      },

      {
        menuItem: "Questions",
        render: () => (
          <Tab.Pane attached={false}>
            {currentUser.questions.map((question, index) => {
              return (
                <div
                  style={{
                    marginBottom: "10px",
                    fontSize: "1.2rem",
                    fontFamily: "sans-serif, Roboto",
                  }}
                >
                  <Link key={index} href={`/questions/${question.id}`}>
                    <a>{question.title}</a>
                  </Link>
                </div>
              );
            })}
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
