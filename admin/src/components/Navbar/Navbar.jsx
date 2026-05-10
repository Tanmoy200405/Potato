import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <h1 className='logo-text'>Potato<span>.</span> Admin</h1>
      </div>
      <div className='navbar-right'>
        <img className='profile' src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar
