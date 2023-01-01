import React from 'react'
import './Footer.css'
import Logo from '../Media/Logo.png'

const Footer = () => {
  return (
    <div className='foot-cont'>
      <div className="foot-left">
        <div className="foot-logo">
          <img className="foot-logop" src={Logo} alt='logo'/>
        </div>
        <div className="foot-Name">
          <h2>
            Text Reader
          </h2>
        </div>
      </div>

			<div className='rights'>
				<small>all rights reserve @2023</small>
			</div>
    </div>
  )
}

export default Footer