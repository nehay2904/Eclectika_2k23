import React from 'react'
import Overall_Team from './Overall_Team'

import { Link } from 'react-router-dom';

import { Button, Paper } from '@mui/material';
const Main_Team = () => {
  return (
    <div className='Main_teams'>
    <Overall_Team />
    <div>
    <Link to={'/'}><Button className='last_button'  variant="contained">Back to home</Button></Link>
    </div>
    </div>
  )
}

export default Main_Team