import Head from 'next/head';
import Navbar from './Navbar';
import React from 'react'

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