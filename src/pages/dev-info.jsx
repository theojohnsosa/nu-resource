import './dev-info.css'

import React from 'react'

import me from '../assets/images/me.svg'
import globe from '../assets/icons/globe.svg'
import github from '../assets/icons/github.svg'
import email from '../assets/icons/email.svg'
import linkedin from '../assets/icons/linkedin.svg'

import { Link } from 'react-router-dom'

const DevInfo = () => {
  return (
    <div className="dev-info">
      <div className="main-info">
        <h1>Hello, <span className="name">I'm Theo</span>!</h1>
        <p>
          I'm a <span>2nd year BSIT student at National University MOA with specialization in Mobile and Web Applications</span> - and yes, I build things on the side.
          <br />
          <br />
          <span>NU Resource started as a school project</span>, but it became something I genuinely wanted to exist. The idea was simple: students shouldn't have to dig through group chats and random drives just to find a good reviewer. So I built a <span>centralized platform</span> where NU students can browse, share, and contribute academic materials - all in one place.
          <br />
          <br />
          The current version was previously built with vanilla <span>HTML, CSS, and JavaScript</span>, with <span>Supabase</span> handling the backend and database. It's lightweight, functional, and gets the job done. Once the project wraps up for the semester though, I plan to <span>rebuilt it on a more modern stack - React and Supabase</span> - to make it faster, more scalable, and easier to maintain long-term.
          <br />
          <br /> 
          I care a lot about <span>building things that are actually useful and will be impactful for users</span>. If NU Resource helps even a handful of students stress less during exam season, that's already a win.
        </p>
        <div className="dev-profiles">
          <h1>Feel free to check out my developer profiles!</h1>
          <div className="dev-profiles-btn-group">
            <a href="https://theojohnsosa.com/" className="dev-profiles-btn" href="https://theoportfolio.com" target="_blank">
              <img src={globe} />Portfolio
            </a>
            <a href="https://github.com/theojohnsosa" className="dev-profiles-btn" target="_blank">
              <img src={github} />GitHub
            </a>
            <a href="mailto:theojohnsosa@gmail.com" className="dev-profiles-btn" target="_blank">
              <img src={email} />Email
            </a>
            <a className="dev-profiles-btn" href="https://www.linkedin.com/in/theojohn-sosa-493053319/" target="_blank">
              <img src={linkedin} />LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="profile-image">
        <img src={me} />
      </div>
    </div>
  )
}

export default DevInfo
