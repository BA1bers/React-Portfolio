import React from 'react'

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
    });
    return (
        <div className="aboutMe">
            <div className="container">
                <div className="aboutMeTop">
                    <h1 className="aboutTopHeader">{header.subHeader}</h1>
                    <div className="topBorder"></div>
                </div>
                
            </div>
        </div>
    )
}

export default About
