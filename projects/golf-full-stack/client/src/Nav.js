import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from 'react-bootstrap'

function Nav() {
    return (
        <div>
            <nav className="NavBar">
                <a className="Title">Round Tracker</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                    {/* <div>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                 */}
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to='/' className="dropdown-item">Home</Link>
                                    <Link to="/CourseInput" className="dropdown-item">Courses</Link>
                                    <Link to="/RoundInput" className="dropdown-item">Rounds</Link>
                                    <Link to="/Stats" className="dropdown-item">Stats</Link>
                                    </div>   
                                {/* 
                            </li>
                        </ul>
                    </div> */}
                {/* </div> */}
            </nav>

            <div className="Brand">
                <h1>Round Tracker</h1>
                <h1>Save and compare data on every course, every time...</h1>
            </div>
        </div>
    )
}

export default Nav