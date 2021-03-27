import React, { useEffect, useState } from 'react';
import useSocketDataObject from '../hooks/useSocketDataObject';
import { commands } from '../shared/commands';
import { SocketDataObjectContext } from '../contexts/SocketDataObjectContext';
import { MeetingContext } from '../contexts/MeetingContext';
import MeetingState from '../states/MeetingState';

const RealtimeProvider = ({ children }) => {
    const [meeting, dispatchMeeting] = useState(MeetingState);
    const [socket, setSocket] = useState({
        command: commands.DEFAULT,
        payload: {},
    });
    const { socketDataObject, sendSocketDataObject } = useSocketDataObject();

    useEffect(() => {
        setSocket(socketDataObject);
        switch (socketDataObject.command) {
            case commands.NEW_MEETING: {
                dispatchMeeting(socketDataObject.payload);
            }
        }
    }, [socketDataObject]);
    return (
        <MeetingContext.Provider value={[meeting, dispatchMeeting]}>
            <SocketDataObjectContext.Provider value={[socket, sendSocketDataObject]}>
                {children}
            </SocketDataObjectContext.Provider>
        </MeetingContext.Provider>
    );
};

export default RealtimeProvider;
