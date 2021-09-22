import React from 'react'
import Logo from '../components/images/name.png'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbarContainer">
                    <ul className="navbarLeft">
                        <div className="navbarName">
                            <img src={Logo} alt="name" />
                        </div>
                    </ul>
                    <ul className="navbarRight">
                        <li>
                            <a href="">About Me</a>
                        </li>
                        <li>
                            <a class="secondary" href="">Portfolio</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
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
