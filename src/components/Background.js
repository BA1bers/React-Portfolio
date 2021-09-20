import React from 'react'
import GitIcon from '../components/images/Github.png'
import LinkedIcon from '../components/images/Linkedin.png'
import ProfilePhoto from '../components/images/1632089247488.png'

const Background = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="headerDetails">
                            <div className="headerSection">
                                <ul className="headerUl">
                                    <li>
                                        <img src={GitIcon} alt="githubIcon" />
                                    </li>
                                    <li>
                                        <img src={LinkedIcon} alt="linkedinIcon" />
                                    </li>
                                </ul>
                                <h1>
                                    Hello there! My name is Brent Albers
                                </h1>
                                <p>
                                    I'm a full-stack web developer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="profileImg">
                            <img src={ProfilePhoto} alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background
