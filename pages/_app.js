import React from "react";

import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@fullcalendar/timegrid/main.css' // @fullcalendar/timegrid is a direct import

import Layout from "../components/Layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import { AuthProvider, ProtectRoute } from "../contexts/auth";


function MyApp({ Component, pageProps }) {
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