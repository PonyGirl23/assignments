import React from "react";
import { connect } from "react-redux"
import Contact from "./Contact"

function ContactList(props) {
    const conList = props.contacts.map((person, i) => {
        {/* {map through contacts and render <Contact /> 
        for each one, passing in the necessary props} */}
        return (
            <Contact key= { i } person= { person }/>
        )
    })
    return (
        <div>
            { conList } 
        </div>
    )
}
// connect to redux for the array of contacts
export default connect(state => state, {})(ContactList);