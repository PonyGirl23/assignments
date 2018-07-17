import React from 'react'
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <div className="nav">
        <h1 className="Header">Stars: Gems Of The Cosmos</h1>
            <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/Stars">See The Stars</Link>
            <Link to="/inDepth">In Depth</Link> 
            </div>
        </div>
    )
}


export default Nav

