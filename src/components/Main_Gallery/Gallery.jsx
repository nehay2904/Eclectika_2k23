
import React, { forwardRef } from 'react'
import './Main_Gallery.css'


import Fade from 'react-reveal/Fade';

const Ecectika_Gallery = () => {
    return (
        <div id='gallery'  className="Overall_Gallery">

            <div className="container">

                <div className="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg" />
                    <h4 className='image-title'>image title</h4>
                </div>
                <div className="alt_card card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg" />
                    <h4 className='image-title'>image title</h4>
                </div>
                <div className="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG" />
                    <h4 className='image-title'>image title</h4>
                </div>
                <div className="alt_card card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg" />
                    <h4 className='image-title'>image title</h4>
                </div>
                <div className="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg" />
                    <h4 className='image-title'>image title</h4>
                </div>
            </div>
            <div className="title_gallery">

                <Fade bottom>
                    <h1 className="gallery_title">GALLERY</h1>
                </Fade>
            </div>
        </div>
    )
}

export default forwardRef(Ecectika_Gallery)