import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className='footer-logo-text'>Potato<span>.</span></h1>
          <p className='footer-desc'>Potato is your premium food delivery partner, dedicated to bringing the best culinary experiences from top-rated restaurants straight to your table. Our passion for quality and speed defines every delivery we make.</p>
          <div className="footer-social-icons">
            <div className='social-icon-wrapper'><img src={assets.facebook_icon} alt="Facebook" /></div>
            <div className='social-icon-wrapper'><img src={assets.twitter_icon} alt="Twitter" /></div>
            <div className='social-icon-wrapper'><img src={assets.linkedin_icon} alt="LinkedIn" /></div>
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className='footer-heading'>Company</h2>
          <ul className='footer-list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery Info</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2 className='footer-heading'>Get in Touch</h2>
          <ul className='footer-list'>
            <li>+1 (555) POTATO-01</li>
            <li>hello@potato.com</li>
            <li>123 Culinary Ave, Foodie City</li>
          </ul>
        </div>
      </div>
      <div className='footer-divider'></div>
      <p className="footer-copyright">Copyright 2024 © Potato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
