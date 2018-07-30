import React from 'react'


function BountyCard(props) {
    return (
        <div className="individual">
            <div className="fName"> First Name: {props.firstName} </div>
            <div className="lName"> Last Name: {props.lastName} </div>
            <div className="living"> Living: {props.living} </div>
            <div className="price"> Bounty Amount: {props.price} </div>
            <div className="type"> Type: {props.type} </div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default BountyCard