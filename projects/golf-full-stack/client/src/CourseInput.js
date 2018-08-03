import React, { Component } from 'react'
import CourseForm from './CourseForm'
import axios from 'axios'

class CourseInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            courses: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleHoleInput = this.handleHoleInput.bind(this)
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
                        courses: [prevState.courses]
                    }
                })

            })
    }

    render() {
        return (
            <div>
                <form className="CourseInput" onSubmit={this.handleSubmit}>
                    <h1 className="Course Details">Course Details:</h1>
                    Course Name:<input type="text" name="courseName" value={this.state.courseName} onChange={this.handleChange} />
                    Course Description:<input type="textarea" name="description" rows='10' value={this.state.description} onChange={this.handleChange} />
                    Tee Choice: <input type="text" name="tee" value={this.state.tee} onChange={this.handleChange} />

                    {this.state.holes.map(holeInputs => {
                        //give hole form props
                        {/* pass handle hole inputs into form */}
                        return <CourseForm inputs={holeInputs} key={holeInputs.num}  />
                    })}
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}



export default CourseInput