import React, { useState } from "react";
import Link from "next/link";
import styles from "./CardQuestionPage.module.css";
import CardTagQuestion from "../CardQuestions/CardTagQuestion";
import { Button, Form, Modal } from "semantic-ui-react";

function CardQuestionLeft({ tagQuestions }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.cardQuestionLeft}>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <button className={styles.askQuestion}>+ Ask a question</button>
        }
      >
        <Modal.Header>Post Your Question</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Question Title</label>
              <input placeholder="Title" />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Question Tags</label>
              <input placeholder="tags" />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Question Body</label>
              <input placeholder="content" control='textarea' rows='3' />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Publish your question"
            labelPosition="left"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      <div className={styles.cardQuestionTag}>
        <i className="fa fa-tag"></i>
        <span>Tag</span>
      </div>
      <div className={styles.cardQuestionTagDetail}>
        {tagQuestions.map((tagQuestion, id) => {
          return <CardTagQuestion tagQuestion={tagQuestion} key={id} />;
        })}
      </div>
      <p>
        <Link href="/tag-question"> See more tags </Link>
      </p>
    </div>
  );
}
export default CardQuestionLeft;
