import React from 'react'
import { connect } from 'react-redux'

function Stars(props) {
    // Render individual star info 
    return (
        <div>
            <div className="title"> {props.name}</div>
            <img className="img" src={props.img} />
            <div className="info"> {props.info }</div>
        </div>
    )
}


export default Stars

// Stars By Id:
// 1) "title": "Hubble Observes One-of-a-Kind Star Nicknamed ‘Nasty’"
//    "nasa_id": "hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o"
// 2) "title": "Tabby's Star (Illustration)"
//    "nasa_id": "PIA22081"
// 3) "title": "A Star-Formation Laboratory"
//    "nasa_id": "GSFC_20171208_Archive_e001894"
// 4) "title": "Hubble Friday - Heavy Metal Stars"
//    "nasa_id": "GSFC_20171208_Archive_e000282"
// 5) "title": "Hubble Sees a Star ‘Inflating’ a Giant Bubble"
//    "nasa_id": "GSFC_20171208_Archive_e000383"
