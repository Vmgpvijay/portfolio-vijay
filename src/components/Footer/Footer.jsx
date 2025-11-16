import React from 'react'
import footerlogo from '../../assets/footer_logo.svg';
import usericon from '../../assets/user_icon.svg';
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    
    <div className='container-fluid d-flex flex-column gap-4 footer '>
        <div className='footer-top d-flex justify-content-between'>
            <div className='footer-left'>
                <img src={footerlogo} alt="" />
                <p>I am a frontend developer from chennai</p>
            </div>
            <div className='d-flex align-items-center gap-4'>
              <div>
                <img src={usericon} alt="" />
                <input type="email" placeholder='Enter your email'/>
              </div>
              <div>
                subscribe
              </div>
            </div>

        </div>
        <hr />
        <div>
          <p>&copy; {currentYear} Vijay All rights reserverd. </p>
        </div>
    </div>
  )
}

export default Footer