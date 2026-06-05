import React from 'react'

import Header from './header.js'

const PageLayout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default PageLayout
