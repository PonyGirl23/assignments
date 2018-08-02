import React, { Component } from "react";

function HoleForm(props) {
    const {inputs} = props;
    console.log(inputs)
    return (
        <form className="HoleForm">
            Hole Number:<input type="number" min="1" max="18"  />
            Par:<input type="number" min="1" />
            Yards:<input type="number" min="1" />
        </form>
    )
}

export default HoleForm;