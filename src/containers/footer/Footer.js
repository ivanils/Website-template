import React from 'react'
import gpt5Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt5_footer section_padding'>
      <div className='gpt5_footer-heading'>
        <h2 className='gradient_text'>Do you want to step into the future before others?</h2>
      </div>
      <div className='gpt5_footer-button'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt5_footer-links'>
        <div className='gpt5_footer-links_logo'>
          <img src={gpt5Logo} alt='logo' />
          <p>123 Future Street, Innovation City, 45678</p>
        </div>
        <div className='gpt5_footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt5_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt5_footer-links_div'>
          <h4>Get in Touch</h4>
          <p>123 Future Street, Innovation City, 45678</p>
          <p>0412345678</p>
          <p>info@mail.au</p>
        </div>
      </div>
      <div className='gpt5_footer-copyright'>
        <p></p>
      © {new Date().getFullYear()} GPT-5. All rights reserved.
      </div>
    </div>
  )
}

export default Footer