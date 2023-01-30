import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade'
const About = () => {
  return (
    <div id='about_section'   className='about'>
      <Fade bottom >
        <h1 className="about_title">
          About us
        </h1>
      </Fade>
      <div className="content_box" >
        <Fade bottom>
          <p className="about_content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci debitis voluptatibus ipsam non veniam quibusdam sunt excepturi quisquam esse voluptas officia aperiam, voluptatem nesciunt iusto eaque fugiat est cumque commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sed eligendi nihil, impedit excepturi quae repellendus quis id officiis dignissimos mollitia placeat ducimus ratione iste. Corporis autem eaque eum cumque!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci debitis voluptatibus ipsam non veniam quibusdam sunt excepturi quisquam esse voluptas officia aperiam, voluptatem nesciunt iusto eaque fugiat est cumque commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sed eligendi nihil, impedit excepturi quae repellendus quis id officiis dignissimos mollitia placeat ducimus ratione iste. Corporis autem eaque eum cumque!
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default About