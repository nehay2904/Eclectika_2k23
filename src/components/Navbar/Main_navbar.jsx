import React, { useState, useRef , useEffect} from 'react';
import './Navbar.css'
import { motion } from 'framer-motion'
import Black_logo from '../../Images/black_logo.png'
import Home from '../Home/Home';
import * as Scroll from 'react-scroll';
import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Our_Events from '../Our_Events/Our_Events';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Overall_Team from '../Team/Overall_Team';



export default function Main_navbar() {

  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 100 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (

    <div style={{backgroundColor:navColor}} id='nav' className='main_navbar'>
      <div className='logo_nav'>
        <img src={Black_logo} className="black_logo" alt="" srcset="" />
      </div>

      <div className='nav-links'>
        
      <motion.li whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.1 }} className='nav-items'><a href='#home'>HOME</a></motion.li>
      <motion.li whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.1 }} className='nav-items'><a href="#about_section">ABOUT</a></motion.li>
      <motion.li whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.1 }} className='nav-items'><Link to='events'>EVENTS</Link></motion.li>
      <motion.li whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.1 }} className='nav-items'><a href="#sponsor">SPONSORS</a></motion.li>
      <motion.li whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.1 }} className='nav-items'><a href="#gallery">GALLERY</a></motion.li>
      <motion.li whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.1 }} className='nav-items'><Link to='team'>TEAM</Link> </motion.li>
      <motion.li whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.1 }} className='nav-items'><a href="#contact">CONTACT</a></motion.li>
      </div>


    </div>

  )
}
