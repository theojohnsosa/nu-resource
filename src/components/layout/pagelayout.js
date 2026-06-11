import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header.jsx'
import Footer from './footer.jsx'

const PageLayout = ({children}) => {
  return (
    <>
      <Header />
      <Outlet />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
