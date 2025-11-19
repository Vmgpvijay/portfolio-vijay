
import React from 'react'
import './Contact.css';
import Footer from '../Footer/Footer';
import { BsEnvelope, BsTelephone, BsGeoAlt } from "react-icons/bs";


import svgicon from '../../assets/theme_pattern.svg'
  function Contact() {
    return (
      <>
      <div className='container-fluid d-flex flex-column align-items-center gap-4 '>
        <div className='heading-wrapper d-flex flex-column position-relative align-items-center'>
                      <h1 className=" mt-2 fw-bold skills-heading">
                        Get in touch    
                      </h1>
                      <img className='position-absolute z-n1contacts ' src={svgicon} alt="vijay" />
                      </div>
        <div className='contact d-flex flex-column flex-md-row  justify-content-center m-auto gap-5 mt-2'>
          <div className='d-flex flex-column gap-2 left '>
            <h1 className='fw-semibold text-center'>Let's talk</h1>
            <p className='vijay mt-2 text-center '>🌟 "I’m always excited to explore new opportunities. If you have something in mind, don’t hesitate to reach out—I’d be happy to connect with you." </p>
            <div  className='d-flex flex-column  gap-2 left-details mx-auto align-items-start'>
              <div className='details-contact '>
                  <BsEnvelope size={24}/>
                  <p className=''>vmgpvijay@gmail.com</p>
              </div>
              <div className='details-contact '>
                  <BsTelephone size={24}/>                  
                  <p className=''>6385364454</p>
              </div>
              <div className='details-contact'>
                 <BsGeoAlt size={24} />
                 <p className=''>chennai</p>
              </div>
            </div>
          </div>
          <form action="" className='contact-right d-flex flex-column align-items-start gap-2'>
            <label htmlFor="">Your name</label>
            <input type="text"  placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label> 
            <textarea name="message" rows="3" placeholder='Enter your message' id=""></textarea>
            <button type='submit' className='submit-button btn border-0 text-white rounded-pill bg-white fs-6 px-5 py-2 mb-4 mt-2 ' >Submit Now</button>     
              </form>
        </div>
      </div>
      <Footer />
     </> 
    )
  }

export default Contact