import React, { Component } from 'react'

function RoundForm(props) {
    const { inputs } = props;
    console.log(inputs)
    return (
        <form className="RoundForm">
            Hole Number:<input type="number" min="1" max="18" />
            Strokes:<input type="number" min="1" />
            Puts: <input type="number" min="1"/>
            Notes:<input type="text"/>
        </form>
    )
}

export default RoundForm 