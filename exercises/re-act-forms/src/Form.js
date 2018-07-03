import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            fname: "",
            lname: "",
            isdead: false,
            select: "Anteater"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        // this is the same as above, just less concise:
        // if(e.target.type === "checkbox"){
        //     const value = e.target.checked
        // }else{
        //     const value = e.target.value
        // }
        this.setState({ [e.target.name]: value })
    }
    handleSelect = (e) => {
        this.setState({ select: e.target.value })
    }

    render() {
        return (
            <form>
                <input type="text" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} />
                <h1>{this.state.fname}</h1>
                <input type="text" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} />
                <input type="checkbox" name="isdead" checked={this.stateisdead} onChange={this.handleChange} />
                <select value={this.state.select} onChange={this.handleSelect}>
                    <option value="Anteater">Anteater</option>
                    <option value="Antelope">Antelope</option>
                    <option value="Aardvark">Aardvark</option>
                    <option value="Giraffe">Giraffe</option>
                </select>
            </form>
        )
    }
}
