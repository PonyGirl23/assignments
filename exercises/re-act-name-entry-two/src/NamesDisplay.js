import React from "react"

const NamesDisplay = props => {
    const mappedNames = props.nameList.map((name, i) =>
        <li key={name + i}> {name}</li>)
    return (
        <div>
            <h1> {props.name} </h1>
            <ol>
                {mappedNames}
            </ol>
        </div>
    )
}


export default NamesDisplay
