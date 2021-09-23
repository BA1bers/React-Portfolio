import React from 'react'
import GitIcon from '../components/images/Github.png'
import LinkedIcon from '../components/images/Linkedin.png'

const Footer = () => {
    return (
        <div className="mainFooter">
            <div className="footerContainer">
                <div className="row">
                    <ul className="footerUl">
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
    )
}

export default Footer
