import React from 'react'
import CarouselCom from '../../materialUI/Carousel'
import '../Our_Events/Carousel.css'

import Fade from 'react-reveal/Fade';
import { Button, Paper } from '@mui/material';

import Imageone from '../../Images/Four_Event.jpeg'
import Imagetwo from '../../Images/One_Event.jpeg'
import Imagethree from '../../Images/Five_Event.jpeg'
import { Link } from 'react-router-dom';

const Overall_Events = () => {
  return (
    <div className="Overall_events">
       <Fade bottom>
          <h1 className="eventstitle" > OUR EVENTS</h1>
        </Fade>
      <div className="mega_events">
        <h4 className='sub_events_title'>Mega Events</h4>
        <div className='event_section_mega'>
          <Paper elevation={3}  className='paper' ><img className='event_img' src={Imageone} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='paper' ><img className='event_img'  src={Imagetwo} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='paper' ><img className='event_img'  src={Imagethree} alt="" srcset="" /></Paper>

        </div>
        <div className='event_section_mega'>
          <Paper elevation={3}  className='paper' ><img className='event_img' src={Imageone} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='paper' ><img className='event_img'  src={Imagetwo} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='paper' ><img className='event_img'  src={Imagethree} alt="" srcset="" /></Paper>

        </div>
        <div className='event_section_mega'>
          <Paper elevation={3}  className='paper' ><img className='event_img'  src={Imagethree} alt="" srcset="" /></Paper>

        </div>
        

      </div>
      <div className="mega_events">
        <h4 className='sub_events_title'>Mini Events</h4>
        <div className='event_section_mini'>
        <img className='event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        <div className='event_section_mini'>
        <img className='event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        <div className='event_section_mini'>
        <img className='event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        <div className='event_section_mini'>
        <img className='event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        

         <Link to={'/'}><Button className='last_button'  variant="contained">Back to home</Button></Link>
      </div>
     
    </div>
  )
}

export default Overall_Events