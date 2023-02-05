import React from 'react'
import "./Nav.css"
import logo from '../img/logo.png'

function Nav() {
  return (
    <div className='nav'>
        <img className='logo'
           src={logo}
           alt='logo'
        />
       
        
    </div>
  )
}

export default Nav