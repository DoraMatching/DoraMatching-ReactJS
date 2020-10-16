import Head from 'next/head';
import Navbar from "./Navbar";

const Layout = ({children}) => (
  <>
    <Head>
      <title>Dora Matching</title>
    </Head>
    <Navbar />
    {children}
  </>
)

export default Layout;