
import React, { Component } from "react"
import Kill from "./Kill"
import axios from "axios"
import "./Styles.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            hits: []
        }

    }


    componentDidMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            console.log(response)
            this.setState({ hits: response.data })
            // console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <h1>Don Corleone's Hit List</h1>
                </nav>
                <Kill info={this.state.hits} />
            </div>
        )
    }
}

export default App