import React from 'react';
import footerlogo from '../../assets/footer_logo.svg';
import usericon from '../../assets/user_icon.svg';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer container-fluid d-flex flex-column gap-4'>
      
      <div className='footer-top d-flex justify-content-between align-items-center flex-wrap'>
        
        {/* Left Side */}
        <div className='footer-left'>
          <img src={footerlogo} alt="Logo" />
          <p>I am a frontend developer from Chennai</p>
        </div>

        {/* Right Side */}
        <div className='footer-subscribe d-flex align-items-center gap-3'>
          
          <div className='input-box d-flex align-items-center'>
            <img src={usericon} alt="email icon" />
            <input type="email" placeholder='Enter your email' />
          </div>

          <button className='subscribe-btn'>Subscribe</button>
        </div>

      </div>

      <hr />

      <div className='footer-bottom text-center'>
        <p>&copy; {currentYear} Vijay — All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
