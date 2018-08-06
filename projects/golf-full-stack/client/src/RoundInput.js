import React, { Component } from 'react'
import RoundForm from './RoundForm'
import axios from 'axios'

class RoundInput extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            roundName: "",
            date: new Date(),
            holes: Array.from(Array(18)).map((hole, i) => {
                return {
                    strokes: 0,
                    puts: 0,
                    notes: "",
                    num: i + 1
                }
            }),
            rounds: [],
        }
        this.state = this.initialState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRoundInput = this.handleRoundInput.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRoundInput(e, holeIndex) {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                holes: prevState.holes.map((hole, i) => {
                    //find the hole with matching index
                    if (i === holeIndex) {
                        console.log(name, value)
                        // return the updated hole
                        return {
                            ...hole,
                            [name]: value
                        }
                    } else {
                        // otherwise return the old hole
                        return hole
                    }
                })
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        //make an axios request POST containing state
        const newRound = {
            roundName: this.state.roundName,
            date: this.state.date,
            holes: this.state.holes,
            // courseId: 
        }
        axios.post("/rounds", newRound)
            .then(response => {
                //setState: (Set state to contain the new round in the array)
                this.setState(prevState => {
                    return {
                        ...this.initialState,
                        rounds: [prevState.rounds]
                    }
                })
            })
    }

    render() {
        return (
            <div>
                {/* <div className="CourseStats"></div> */}
                <form className="RoundInput" onSubmit={this.handleSubmit}>
                    <h1 className="RoundDetails">Round Details:</h1>
                    <div className="RoundInfo">
                        Course Name:<input type="text" name="roundName" value={this.state.roundName} onChange={this.handleChange} />
                        Date: <input type="date" name="roundDate" value={this.state.date} onChange={this.handleChange} />
                    </div>

                    {this.state.holes.map((holeInputs, i) => {
                        
                        return <RoundForm
                            key={holeInputs.num + i}
                            inputs={holeInputs}
                            onHoleInput={this.handleHoleInput}
                            holeIndex={i}
                        />
                    })}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default RoundInput

// ?????? onRoundInput={this.handleRoundInput}