import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { commands } from '../shared/commands';
import config from '../services/Config';

const useSocketDataObject = () => {
    const [socketDataObject, setSocketDataObject] = useState({
        command: commands.DEFAULT,
        payload: {},
    });
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(config.API_URL);
        socketRef.current.on('msgToClient', (dataObject) => {
            setSocketDataObject(dataObject);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendSocketDataObject = (dataObject) => {
        socketRef.current.emit('msgToServer', dataObject);
    };

    return { socketDataObject, sendSocketDataObject };
};

export default useSocketDataObject;
