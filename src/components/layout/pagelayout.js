import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header.js'

const PageLayout = ({children}) => {
  return (
    <>
      <Header />
      <Outlet />
      <main>{children}</main>
    </>
  )
}

export default PageLayout
