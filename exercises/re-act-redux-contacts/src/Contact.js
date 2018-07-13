import React from "react"
import { connect } from "react-redux"
import { deleteContact } from "./redux"

function Contact(props) {
    // Render individual contact info and delete button
    return(
    <div>
        <div className="name"> {props.person.name}</div>
        <div className="phone"> {props.person.phone}</div>
        <div className="email"> {props.person.email}</div>
        <button>Delete</button>
    </div>
    )
}

export default connect(null, { deleteContact })(Contact)