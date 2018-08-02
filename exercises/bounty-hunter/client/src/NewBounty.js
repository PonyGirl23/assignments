import React, { Component } from 'react'
import axios from 'axios'
import BountyCard from "./BountyCard"

class NewBounty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            living: "",
            price: 0,
            type: "",
            bounties: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePut = this.handlePut.bind(this);
        // this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        //make an axios request POST containing state
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            price: this.state.price,
            type: this.state.type
        }

        axios.post("/bounties", newBounty)
            .then(response => {
                //setState: (set state to contain the new bounty in the array)
                this.setState(prevState => {
                    return {
                        bounties: [newBounty, ...prevState.bounties]
                    }
                })
            })
    }

    // get the array of bounties
    componentDidMount() {
        axios.get("/bounties/:id")
            .then(response => {
                //set state equal to the bounty list data
                this.setState(prevState => {
                    return {
                        bounties: [prevState.bounties]
                    }
                })
            })
    }

    // Edit Bounties:

    handlePut(e) {
        e.preventDefault();
        this.setState({ id: e.target.value })

        const putBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            price: this.state.price,
            type: this.state.type
        }
        axios.put("/bounties/:id", putBounty)
            .then(response => {
                this.setState(prevState => {
                    return {
                        bounties: [putBounty, ...prevState.bounties]
                    }
                })
            })
    }
    // Delete Bounties:
    handleDelete(e) {
        e.preventDefault();
        this.setState({ id: e.target.value })

        axios.delete("/bounties/:id")
        .then(response => {
            this.setState(prevState => {
                return{
                    bounites: [this.state.bounties]
                }
            })
        })
    }

    render() {
        const bounties = this.state.bounties.map(bounty => <BountyCard {...bounty} />)

        return (
            <div>
                <h1>Bounty List</h1>
                <form onSubmit={this.handleSubmit}>
                    First Name:<input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    Last Name:<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    Living:(True or False)<input type="text" name="living" value={this.state.living} onChange={this.handleChange} />
                    {/* False<input type="radio" name="living" value={this.state.living} onChange={this.handleChange} /> */}
                    Bounty Amount: <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
                    Type:(Jedi or Sith)<input type="text" name="type" value={this.state.type} onChange={this.handleChange} />
                    {/* Sith<input type="radio" name="jedi" value={this.state.value} onChange={this.handleChange} /> */}
                    <button>Submit</button>
                </form>
                {bounties}
            </div >
        )
    }
}

export default NewBounty