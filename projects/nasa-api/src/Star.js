import React from 'react'
import { connect } from 'react-redux'

function Star(props) {
    // Render individual star info 
    // console.log(props.image)
    return (
        <div className="nasa">
            <div className="title"> {props.name}</div>
            <div className="img" style={{backgroundImage: `url(${props.img})`}}></div> 
            <div className="info"> {props.info }</div>
        </div>
    )
}


export default Star


