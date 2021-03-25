import React, {useState, useContext, useEffect} from 'react';
import {Button, Header, Modal} from "semantic-ui-react";
import {MeetingContext} from "../../contexts/MeetingContext";

export default function NotificationModal() {
    const [isOpen, setOpen] = useState(false);
    const [notification, setNotification] = useState(false);
    const [message, dispatchMessage] = useContext(MeetingContext);

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    useEffect(() => {
        if(message) {
            setOpen(true);
            dispatchMessage(null);
        }
    }, [message]);

    return(
        <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={isOpen}>
            <Header icon={'bullhorn'} content={'You got a message'}/>
            <Modal.Content>

            </Modal.Content>
            <Modal.Actions>
                <Button color={'black'} onClick={() => setOpen(false)}>Close</Button>
                <Button content={'Open this meeting in Zoom'} labelPosition={'right'} icon={'video'} onClick={() => setOpen(false)} positive/>
            </Modal.Actions>
        </Modal>
    )
}
