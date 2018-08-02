import React, { Component } from 'react';
import HoleForm from "./HoleForm";

class CourseInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            tee: "",
            holes: Array.from(Array(18)).map((hole, i) => {
                return {
                    par: 0,
                    yards: 0,
                    num: i + 1
                }
            })
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handlePut = this.handlePut.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleHoleInput(e, holeIndex) {
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
                <form className="CourseInput" onSubmit={this.handleSubmit}>
                    <h1 className="Course Details">Course Details:</h1>
                    Course Name:<input type="text" value={this.state.name} />
                    Course Description:<input type="textarea" rows='10' value={this.state.description} />
                    Tee Choice: <input type="text" value={this.state.tee} />

                    {this.state.holes.map(holeInputs => {
                        //give hole form props
                        return <HoleForm inputs={holeInputs} />
                    })}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}



export default CourseInput