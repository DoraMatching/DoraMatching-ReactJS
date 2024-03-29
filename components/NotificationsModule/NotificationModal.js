import React, {useContext, useEffect, useState} from 'react';
import {Button, Header, Modal} from 'semantic-ui-react';
import {MeetingContext} from '../../contexts/MeetingContext';
import {commands} from '../../shared/commands';
import NewMeetingNotification from './NewMeetingNotification';
import MeetingState from '../../states/MeetingState';
import {SocketDataObjectContext} from '../../contexts/SocketDataObjectContext';

export default function NotificationModal() {
    const [isOpen, setOpen] = useState(false);
    const [meeting, dispatchMeeting] = useContext(MeetingContext);
    const [socketDataObject, , sendSocket] = useContext(SocketDataObjectContext);

    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        if (meeting && meeting.id) {
            setOpen(true);
        }
    }, [socketDataObject, meeting]);

    const renderCardBody = () => {
        switch (socketDataObject.command) {
            case commands.START_MEETING: {
                return <NewMeetingNotification meeting={meeting}/>;
            }
            case commands.NEW_MEETING: {
                return <NewMeetingNotification meeting={meeting}/>;
            }
            default: {
                return <></>;
            }
        }
    };

    const renderButtonAction = () => {
        switch (socketDataObject.command) {
            case commands.NEW_MEETING: {
                return (
                    <Button
                        content={'Open this meeting in Zoom'}
                        labelPosition={'right'}
                        icon={'video'}
                        onClick={() => {
                            window.open(meeting.joinUrl);
                        }}
                        positive
                    />
                );
            }
            case commands.START_MEETING: {
                return (
                    <Button
                        content={'Start your meeting in Zoom'}
                        labelPosition={'right'}
                        icon={'video'}
                        onClick={() => {
                            window.open(meeting.startUrl);
                        }}
                        positive
                    />
                );
            }
            default: {
                return <></>;
            }
        }
    };

    return (
        <Modal
            onClose={() => {
                setOpen(false);
                dispatchMeeting(MeetingState);
            }}
            onOpen={() => setOpen(true)}
            open={isOpen}
        >
            <Header icon={'bullhorn'} content={'You got a meeting'}/>
            <Modal.Content>{renderCardBody()}</Modal.Content>
            <Modal.Actions>
                <Button
                    color={'black'}
                    onClick={() => {
                        setOpen(false);
                        dispatchMeeting(MeetingState);
                    }}
                >
                    Close
                </Button>
                {renderButtonAction()}
            </Modal.Actions>
        </Modal>
    );
}
