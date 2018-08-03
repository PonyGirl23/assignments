import React, { Component } from 'react'
import RoundForm from './RoundForm'

class RoundInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            holes: Array.from(Array(18)).map((hole, i) => {
                return {
                    strokes: 0,
                    puts: 0,
                    notes: "",
                    num: i + 1
                }
            })
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
    }

    render() {
        return (
           <div>
                <form className="RoundInput" onSubmit={this.handleSubmit}>
                    <h1 className="Round Details">Round Details:</h1>
                    Course Name:<input type="text" value={this.state.name} />

                    {this.state.holes.map(holeInputs => {
                        //give hole form props
                        return <RoundForm inputs={holeInputs} />
                    })}
                    <button>Submit</button>
                </form>
            </div> 
        )
    }
}

export default RoundInput