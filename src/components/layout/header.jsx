import './header.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

import nuResourceLogo from '../../assets/images/nu-resource-logo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={nuResourceLogo} alt="NU Resource Logo" />
      <div className="nav-links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="dev-info">Dev Info</NavLink></li>
          <li><NavLink to="browse-resource">Browse Resources</NavLink></li>
          <li><NavLink to="how-to-contribute">How to Contribute?</NavLink></li>
          <button id="register-btn">Register<NavLink to="register"></NavLink></button>
        </ul>
      </div>
    </div>
  )
}

export default Header