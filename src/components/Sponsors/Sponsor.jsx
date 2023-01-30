import React from 'react'
import './Sponsor.css'
import spons_1 from '../../Images/spons_1.png'
import spons_2 from '../../Images/spons_2.png'
import spons_3 from '../../Images/spons_3.png'
import spons_4 from '../../Images/spons_4.png'
import spons_5 from '../../Images/spons_10.png'
import spons_6 from '../../Images/spons_6.png'
import spons_7 from '../../Images/spons_7.png'
import spons_8 from '../../Images/spons_8.png'
import spons_9 from '../../Images/spons_9.png'
import Fade from 'react-reveal/Fade'

const Sponsor = () => {
  return (
    <div id='sponsor' className='container_spons'>
        <Fade bottom><h1 className="spons_title">our Sponsors</h1></Fade>
  
    <div className=" spons_wrapper">
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_1} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_2} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_2} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_3} alt="" srcset="" /></div></Fade>
    </div>
    <div className=" spons_wrapper">
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_4} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_5} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_6} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_3} alt="" srcset="" /></div></Fade>
    </div>
    <div className=" spons_wrapper">
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_7} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_8} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_9} alt="" srcset="" /></div></Fade>
     <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_3} alt="" srcset="" /></div></Fade>
    </div>  
</div>
  )
}

export default Sponsor