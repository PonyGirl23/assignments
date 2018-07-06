import React, { Component } from "react"
import Todo from "./Todo"
import axios from "axios"


class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }

    }


    componentDidMount() {
        axios.get("https://api.vschool.io/marcus/todo").then(response => {
            this.setState({todos: response.data})
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <Todo info={this.state.todos} />
            </div>
        )
    }
}

export default App



