import React from 'react'
import { Button, Header, Image, Modal } from "semantic-ui-react";
import Carousel from "react-elastic-carousel";

function CardTrainersRight() {
  const [open, setOpen] = React.useState(false);
  const breakPoints = [{ width: 200, itemsToShow: 2 }];

    return (
      <div>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button color="linkedin">Top Trainer</Button>}
        >
          <Carousel
            breakPoints={breakPoints}
            showArrows={true}
            pagination={true}
          >
            <Modal.Content>
              <p>Select a Photo</p>
              <Modal.Content image>
                <Image
                  size="medium"
                  src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  wrapped
                />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Nope
                </Button>
                <Button
                  content="Yep, that's me"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => setOpen(false)}
                  positive
                />
              </Modal.Actions>
            </Modal.Content>
            <Modal.Content>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image
                  size="medium"
                  src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  wrapped
                />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Nope
                </Button>
                <Button
                  content="Yep, that's me"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => setOpen(false)}
                  positive
                />
              </Modal.Actions>
            </Modal.Content>
          </Carousel>
        </Modal>
        <Button>Become a Trainer</Button>
      </div>
    );
}

export default CardTrainersRight;
