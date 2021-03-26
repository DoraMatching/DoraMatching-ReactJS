import '@fullcalendar/common/main.css'; // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css'; // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@fullcalendar/timegrid/main.css'; // @fullcalendar/timegrid is a direct import
import 'draft-js/dist/Draft.css';
import 'react-notifications/lib/notifications.css';
import React, { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-markdown-editor-lite/lib/index.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import { AuthProvider } from '../contexts/auth';
import '../styles/globals.css';
import RealtimeProvider from '../providers/RealtimeProvider';
import NotificationModal from '../components/NotificationsModule/NotificationModal';

function MyApp({ Component, pageProps }) {
    return (
        <RealtimeProvider>
            <AuthProvider>
                {/* <ProtectRoute> */}
                <Layout>
                    <Component {...pageProps} />
                    <NotificationModal />
                </Layout>
                {/* </ProtectRoute> */}
            </AuthProvider>
        </RealtimeProvider>
    );
}

export default MyApp;
