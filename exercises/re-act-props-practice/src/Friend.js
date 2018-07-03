import React from 'react'

function Friend(props) {
    // Map through pets and create <Pet /> components: 
    const pets = props.pets.map(()=> <Pet />)
    const 
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            {pets}
        </div>
    )
}

export default Friend
