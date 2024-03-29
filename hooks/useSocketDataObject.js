import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { commands } from '../shared/commands';
import config from '../services/Config';
import { useAuth } from '../contexts/auth';

const useSocketDataObject = () => {
    const { user } = useAuth();
    const [socketDataObject, setSocketDataObject] = useState({
        command: commands.DEFAULT,
        payload: {},
    });
    const socketRef = useRef();

    useEffect(() => {
        if (user && user.id) {
            socketRef.current.emit('load_room', user.id);
        }
    }, [user, socketRef.current]);

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

    return { socketDataObject, sendSocketDataObject, socketRef: socketRef.current };
};

export default useSocketDataObject;
