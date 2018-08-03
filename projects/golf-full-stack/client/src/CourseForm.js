import React, { Component } from "react";

function CourseForm(props) {
    const { inputs } = props;
    console.log(inputs)
    //set values of the inputs and use the handle hole input event listener
    return (
        <div className="CourseForm">
            Hole Number: {inputs.num} 
            Par:<input type="number" min="1" value={inputs.par} />
            Yards:<input type="number" min="1" value={inputs.yards} />
        </div>
    )
}

export default CourseForm;