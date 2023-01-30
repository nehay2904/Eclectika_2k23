import React from 'react'
import './Contact.css'
import Logo from '../../Images/Main_logo.png'
import { FormLabel } from '@mui/material'
import Forms from '../Form/Forms'

import Fade from 'react-reveal/Fade'
const Contact = () => {
  return (
    <div id='contact' className="Main_contact">
         <Fade bottom> <h1 className='footer_title'>ECLECTIKA</h1></Fade>
       
         <div className="footer_menu">
          <li>Home</li>
          <li>Events</li>
          <li>Sponsors</li>
          <li>Gallery</li>
          <li>Team</li>
         </div>
        <div className='icons_container'>
        <div className="footer_icons">
         <i class="social_icon fab fa-instagram"></i>
          <i class="social_icon fab fa-linkedin"></i>
          <i class="social_icon fab fa-facebook"></i>
          <i class="social_icon fab fa-twitter"></i>
          <i class="social_icon fab fa-youtube"></i>
         </div>
        </div>
        <h1 className='end_line'>@Copyrights <span>Eclectika 2023</span>. All rights reserved.</h1>
    </div>
  )
}

export default Contact