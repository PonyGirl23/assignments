import React from 'react'

function Pet() {
    // Render pet info:
    
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.breed}</h2>
        </div>
    )
}

export default Pet
