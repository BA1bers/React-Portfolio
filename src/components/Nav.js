import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbarContainer">
                    <ul className="navbarLeft">
                        <div className="navbarName">
                            <Link to="homePageHeader" smooth={true} duration={1000}>Brent Albers</Link>
                        </div>
                    </ul>
                    <ul className="navbarRight">
                        <li>
                            <Link to="aboutMe" smooth={true} duration={1000}>About Me</Link>
                        </li>
                        <li>
                            <Link class="secondary" to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="contactForm" smooth={true} duration={1000}>Contact</Link>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1RuaDR1zYHFRseXVh7pqdPfil03erplzouCkC4c9zRJ8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="secondary">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
