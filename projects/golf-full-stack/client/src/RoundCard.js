import React from 'react'

function RoundCard(props) {
    console.log(props)
    return (
        <div className="roundCard">
            <div>Course Name: {props.roundName}</div>
            <div>Date Played: {props.date}</div>
            <div>Holes:
                {props.holes.map(hole => {
                    return (
                        <div>
                        <div>Hole Number:{hole.num}</div>
                        <div>Strokes: {hole.strokes}</div>
                        <div>Puts: {hole.puts}</div>
                        <div>Notes: {props.notes}</div>
                        </div>
                    )
                })
                }
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default RoundCard