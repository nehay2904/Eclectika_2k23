import React, { useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { motion } from 'framer-motion'
import Ecectika_Gallery from '../Main_Gallery/Gallery'
import Black_logo from '../../Images/black_logo.png'

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => {

  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <div  id='home' className='home'>
       
      <Navbar />
        <div className="wrapper">
         <div className="titlecon">
          
            <motion.h1 initial={{opacity:0, x:-120, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1, delay:0.6}} className='Home_title'>E</motion.h1>
            <motion.h1 initial={{opacity:0, x:-100, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1 , delay:0.4}} className='Home_title'>C</motion.h1>
            <motion.h1 initial={{opacity:0, x:-80, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1, delay:0.2}} className='Home_title'>L</motion.h1>
            <motion.h1 initial={{opacity:0, x:-60, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1}} className='Home_title'>E</motion.h1>
            <motion.h1 initial={{opacity:0, x:60, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1}} className='Home_title'>C</motion.h1>
            <motion.h1 initial={{opacity:0, x:80, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1 , delay:0.2}} className='Home_title'>T</motion.h1>
            <motion.h1 initial={{opacity:0, x:100, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1, delay:0.4}} className='Home_title'>I</motion.h1>
            <motion.h1 initial={{opacity:0, x:120, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1, delay:0.6}} className='Home_title'>K</motion.h1>
            <motion.h1 initial={{opacity:0, x:140, scale:0.2}} animate={{opacity:1, x:0, scale:1}} transition={{duration:1, delay:0.8}} className='Home_title'>A</motion.h1>
          
         </div>
          <motion.h4 animate={{ opacity: [0, 1] }} transition={{ delay: 2, duration: 1 }} className="subtitle">
             Lose yourself in the jurassic park in the wild and exciting events
          </motion.h4>


        </div>
      </div>
   
    </>
  )
}

export default Home