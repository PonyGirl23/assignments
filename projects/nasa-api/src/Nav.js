import React from 'react'
import { Link } from "react-router-dom"
import Bootstrap from 'bootstrap'

function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Stars</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/'className="dropdown-item">Home</Link>
                                <Link to="/Stars" className="dropdown-item">Star List</Link>
                                <Link to="/inDepth" className="dropdown-item">In Depth</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1 className="Header">Stars: Gems Of The Cosmos</h1>
        </div>
    )
}


export default Nav


{/* <div className="nav">
        <h1 className="Header">Stars: Gems Of The Cosmos</h1>
            <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/Stars">See The Stars</Link>
            <Link to="/inDepth">In Depth</Link> 
            </div>
        </div> */}