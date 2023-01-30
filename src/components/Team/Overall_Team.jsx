import React from 'react'
import Team from './Team'
import './Team.css'
import Fade from 'react-reveal/Fade'
import { Button } from '@mui/material'

import { Link } from 'react-router-dom';
const Overall_Team = () => {
  return (
    <div className='overall_team'>
      <Fade bottom><h1 className="team_title">PRINCIPLE COORDINATORS</h1></Fade>
        <Team />
    </div>
  )
}

export default Overall_Team