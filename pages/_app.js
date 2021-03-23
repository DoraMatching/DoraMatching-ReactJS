import '@fullcalendar/common/main.css'; // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css'; // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@fullcalendar/timegrid/main.css'; // @fullcalendar/timegrid is a direct import
import 'draft-js/dist/Draft.css';
import 'react-notifications/lib/notifications.css';
import React, {useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'react-markdown-editor-lite/lib/index.css';
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import {AuthProvider} from "../contexts/auth";
import "../styles/globals.css";
import useSocket from "../services/socket";
import config from "../services/Config";

function MyApp({Component, pageProps}) {
    const socket = useSocket(config.API_URL);

    useEffect(() => {
        function handleEvent(payload) {
            console.log(payload)
            // HelloWorld
        }
        if (socket) {
            socket.on('msgToClient', handleEvent)
        }
    }, [socket])

    useEffect(() => console.log('refreshed'));


    return (
            <AuthProvider>
                {/* <ProtectRoute> */}
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                {/* </ProtectRoute> */}
            </AuthProvider>
    );
}

export default MyApp;
