import React, { Component } from 'react'

function RoundForm(props) {
    //set values of the inputs and use the handle round input event listener
    const {holeIndex} = props;
    const col = holeIndex % 3 < 1 ? "first" : holeIndex % 3 < 2 ? "mid" : "last";
    return (
        <form className={`RoundForm ${col}`}>
            Hole Number:  {props.inputs.num} 
            <div className="Input">
            Strokes:<input type="number" name="strokes" min="0" value={props.inputs.strokes} onChange={(e) => props.onRoundInput(e, props.holeIndex)}/>
            <span> Puts: <input type="number" name="puts" min="0" value={props.inputs.puts} onChange={(e) => props.onRoundInput(e, props.holeIndex)}/> </span>
            </div>
           
            <div className="Notes"> Notes:<textarea name="notes" value={props.inputs.notes} onChange={(e) => props.onRoundInput(e, props.holeIndex)}/>
            </div>
        </form>
    )
}

export default RoundForm 