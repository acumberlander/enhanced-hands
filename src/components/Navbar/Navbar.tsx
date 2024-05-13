import Image from 'next/image'
import React from 'react'
import './Navbar.css';
import logo from '@/images/enhanced-hands-logo.jpeg';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo-and-title'>
        <Image id="logo" src={logo} alt="logo" />
      </div>
      <div>
        <span>Log In</span>
      </div>
    </div>
  )
}

export default Navbar