import React from 'react'
import GitIcon from '../components/images/Github.png'
import LinkedIcon from '../components/images/Linkedin.png'
import ProfilePhoto from '../components/images/Profile.png'
import Typical from 'react-typical'


const Homepage = () => {
    return (
        <div className="header" id="homePageHeader">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="headerDetails">
                            <div className="headerSection">
                                <h1>
                                    Hello, My name is Brent Albers <br>
                                    </br>& I am  
                                    <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        ' an Engineer',
                                        1000,
                                        ' a Designer',
                                        1000,
                                        ' a Full-Stack Web Developer',
                                        6000
                                    ]}
                                    />
                                </h1>
                                <ul className="headerUl">
                                    <li>
                                        <a href="https://github.com/BA1bers" target="_blank" rel="noopener noreferrer">
                                            <img src={GitIcon} alt="githubIcon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/brent-albers-263561210/" target="_blank" rel="noopener noreferrer">
                                            <img src={LinkedIcon} alt="linkedinIcon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
