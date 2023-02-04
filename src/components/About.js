import React from 'react'
import {Link} from 'react-router-dom';
function About() {
  return (
    <div className='about-div'>
        <div className="about-content">
            <div className="about-header">
                <h1>Hello Techies!</h1>
            </div>
            <div className="about-body">
                <p>Aegio is a fun project which helps students understand about API calls. 
                    It scans the url for vulnerabilities and returns the safe score for the url provided.
                    These are meant to be used only for educational purposes and not for any illegal activities.</p>
            </div>
            <div className="about-footer">
                <h3>Happy Hacking!</h3>
            </div>
            <div className="home-link">
                <Link to='/'>HOME</Link>
            </div>
        </div>
    </div>
  )
}

export default About