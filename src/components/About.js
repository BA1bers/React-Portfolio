import React from 'react'
import MyPhoto from '../components/images/Profile.png'

const About = () => {
    const [header] = React.useState({subHeader: "About Me"});
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="container">
                <div className="aboutMeTop">
                    <h1 className="aboutTopHeader">{header.subHeader}</h1>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="aboutPhoto">
                            <img src={MyPhoto} alt="myPhoto" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="aboutMeInfo">
                            <p>My name is Brent Albers, I am a graduate from the University of Arizona's Full-Stack web development program. I am eager to apply the skills I have learned into building aesthetically pleasing designs with polished UI systems.</p>
                        </div>
                        <div className="aboutMeSkills">
                            <h2>Skills:</h2>
                            <p>HTML5, Git, CSS, Javascript, React.js, Node.js, Express.js, MySQL, MongoDB, & NoSQL </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
