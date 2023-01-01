import "./Navbar.css"
import {Container} from 'reactstrap';
import {TbBrandSublimeText} from 'react-icons/tb';
import Logo from '../Media/Logo.png';

import React from 'react'

const Navbar = () => {
  return (
    <Container className="nav-cont">
      <div className="left">
        <div className="logo">
          <img className="logop" src={Logo}/>
        </div>
        <div className="Name">
          <h2>
            Text Reader
          </h2>
        </div>
      </div>
      <div className="right">
        <div>
          <a className="tag">
            Home
          </a>
          <a className="tag">
            Convert
          </a>
          <a className="tag">
            about
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Navbar