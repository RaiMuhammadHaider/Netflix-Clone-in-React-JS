import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="social-icons">
        <img src={youtube_icon} alt="YouTube" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={facebook_icon} alt="Facebook" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Media Center</li>
        <li>Privacy Policy</li>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Accessibility</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Footer