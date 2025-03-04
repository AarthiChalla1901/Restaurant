import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
        <div className="footer" id='footer'>
            <div className="footer-contents">
                <div className="footer-content-left">
                    <img className='logo' src={assets.logo_new} alt="" />
                    <p className="content-para">Hope you fulfill your cravings soon........!</p>
                    <div className="social-icons">
                        <img src={assets.facebook_icon1} alt="" />
                        <img src={assets.twitter_icon1} alt="" />
                        <img src={assets.linkedin_icon1} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-432-567-89</li>
                        <li>contact@cravecurb.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
        <p className='footer-copy-right'>Copy Right © 2024 Cravecurb.com - All Rights Reserved</p>
        </div>

        
  )
}

export default Footer