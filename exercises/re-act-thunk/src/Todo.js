import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from './redux'

const Todo = props => {
    console.log(props)
    return(
    <div>
        <h2>{ props.title }</h2>
        <h3>{ props.description }</h3>
        <button onClick={ () => props.deleteTodo (props._id) }>Delete</button>
    </div>
    )
}

export default connect(null, { deleteTodo }) (Todo)