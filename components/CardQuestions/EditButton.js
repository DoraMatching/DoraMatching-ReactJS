import React from "react";
import { Button, Icon } from "semantic-ui-react";

function EditButton(props) {
  return (
    <Button color="grey" animated="vertical">
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name="edit" />
      </Button.Content>
    </Button>
  );
}

export default EditButton;
