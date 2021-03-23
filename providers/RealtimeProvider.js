import React, {useContext, useEffect, useState} from 'react';
import useSocketDataObject from "../hooks/useSocketDataObject";
import {commands} from "../shared/commands";
import {SocketDataObjectContext} from "../contexts/SocketDataObjectContext";
import {MeetingContext} from "../contexts/MeetingContext";

const RealtimeProvider = ({children}) => {
    const [meeting, dispatchMeeting] = useState(null);
    const {socketDataObject, sendSocketDataObject} = useSocketDataObject();

    useEffect(() => {
        switch (socketDataObject.command) {
            case commands.NEW_MEETING: {
                console.log(socketDataObject.payload);
                dispatchMeeting(socketDataObject.payload);
            }
        }
    }, [socketDataObject]);
    return (
        <MeetingContext.Provider value={[meeting, dispatchMeeting]}>
            <SocketDataObjectContext.Provider value={{socketDataObject, sendSocketDataObject}}>
                {children}
            </SocketDataObjectContext.Provider>
        </MeetingContext.Provider>
    );
};

export default RealtimeProvider;
