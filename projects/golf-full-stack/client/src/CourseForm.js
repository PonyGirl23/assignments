import React, { Component } from "react";

function CourseForm(props) {
    //set values of the inputs and use the handle hole input event listener
    const {holeIndex} = props;
    const col = holeIndex % 3 < 1 ? "first" : holeIndex % 3 < 2 ? "mid" : "last";
    return (
        <div className={`CourseForm ${col}`}>
            <div>Hole Number: <span>{props.inputs.num} </span></div>
            <div className="CoursePar">Par:<input type="number" name="par" min="0" value={props.inputs.par} onChange={(e) => props.onHoleInput(e, props.holeIndex)} /></div>
            <div>Yards:<input type="number" name="yards" min="0" value={props.inputs.yards} onChange={(e) =>props.onHoleInput(e, props.holeIndex)} /></div>
        </div>
    )
}

export default CourseForm;