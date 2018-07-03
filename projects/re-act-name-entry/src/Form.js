import React, { Component } from "react"
import NamesDisplay from "./NamesDisplay"

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            names: "",
            nameList: []
        }
    }
    handleChange = (e) => {
        this.setState({ names: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                nameList: [...prevState.nameList, this.state.names],
                names: ""
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Name List:</h1>
                    <input type="text"
                        name="names"
                        placeholder="names"
                        value={this.state.names}
                        onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <NamesDisplay 
                names={this.state.names} 
                nameList={this.state.nameList}/>
            </div>
        )
    }
}