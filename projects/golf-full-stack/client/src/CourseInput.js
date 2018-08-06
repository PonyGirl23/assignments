import React, { Component } from 'react'
import CourseForm from './CourseForm'
import axios from 'axios'

class CourseInput extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            courseName: "",
            description: "",
            tee: "",
            holes: Array.from(Array(18)).map((hole, i) => {
                return {
                    par: 0,
                    yards: 0,
                    num: i + 1
                }
            }),
            courses: [],
        }
        this.state = this.initialState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleHoleInput = this.handleHoleInput.bind(this)
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
        const newCourse = {
            courseName: this.state.courseName,
            description: this.state.description,
            tee: this.state.tee,
            holes: this.state.holes
        }
        axios.post("/courses", newCourse)
            .then(response => {
                //setState: (Set state to contain the new course in the array)
                this.setState(prevState => {
                    return {
                        ...this.initialState,
                        courses: [prevState.courses]
                    }
                })

            })
    }

    render() {
        return (
            <div>
                <form className="CourseInput" onSubmit={this.handleSubmit}>
                    <h1 className="CourseDetails">Course Details:</h1>
                    <div className="CourseInfo">
                        Course Name:<input className="CourseName" type="text" name="courseName" value={this.state.courseName} onChange={this.handleChange} />

                        Tee Choice: <input className="CourseTee" type="text" name="tee" value={this.state.tee} onChange={this.handleChange} />
                    </div>

                    <div className="CourseDescription"> 
                        Course Description:
                        <textarea name="description" rows='1' cols="15" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    {this.state.holes.map((holeInputs, i) => {
                        return <CourseForm
                            key={holeInputs.num + i}
                            inputs={holeInputs}
                            onHoleInput={this.handleHoleInput}
                            holeIndex={i}
                        />
                    })}
                    <div className="CourseButton"><button>Submit</button></div> 
                </form>
            </div>
        )
    }
}



export default CourseInput