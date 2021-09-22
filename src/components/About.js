import React from 'react'
import MyReactLogo from '../components/images/MyReactLogo.png'

const About = () => {
    const [header] = React.useState({subHeader: "About Me"});
    return (
        <div className="aboutMe">
            <div className="container">
                <div className="aboutMeTop">
                    <h1 className="aboutTopHeader">{header.subHeader}</h1>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="aboutLogo">
                            <img src={MyReactLogo} alt="myreactlogo" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="aboutMeInfo">
                            <p>My name is Brent Albers, a Full Stack Web Development student at the University of Arizona. I am eager to apply the skills I have learned into building aesthetically pleasing designs with polished UI systems.</p>
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
