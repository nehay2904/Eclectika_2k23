
import React from 'react'
import MultiActionAreaCard from '../../materialUI/CardComponent'
import BasicTextFields from '../../materialUI/FormComponent'
import './Team.css'
import Fade from 'react-reveal/Fade'
const Team = () => {
  return (
    <div className='container Team'>
        <div className="team_wrapper">
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
        </div>
        <div className="team_wrapper">
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
        </div>
        <div className="team_wrapper">
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
        </div> 
        <div className=" row team_wrapper_last">
        <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
           <Fade bottom><div className="team_col"> <MultiActionAreaCard /></div></Fade>
          
          
        </div>
    </div>
  )
}

export default Team