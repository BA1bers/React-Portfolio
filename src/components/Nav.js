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
                            <a href="">Resume</a>
                        </li>
                        <li>
                            <a class="secondary"href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
