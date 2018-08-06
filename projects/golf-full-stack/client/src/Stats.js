import React, { Component } from 'react'
import axios from 'axios'
import CourseCard from "./CourseCard"
import RoundCard from "./RoundCard"

class Stats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: null,
            round: null,
            courseList: [],
            roundList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCourse = this.handleCourse.bind(this)
        this.handleRound = this.handleRound.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
    }
    // get the array of courses
    componentDidMount() {
        axios.get("/courses")
            .then(response => {
                const courseList = response.data;
                axios.get("/rounds")
                    .then(response => {
                        //set state equal to the round list data
                        this.setState(prevState => {
                            return {
                                roundList: response.data,
                                courseList
                            }
                        })

                    })
            })
    }

    handleCourse(e) {
        console.log(e.target.value)
        axios.get(`/courses/${e.target.value}`)
            .then(response => {
                this.setState({ course: response.data })
            })
    }

    handleRound(e) {
        console.log(e.target.value)
        axios.get(`/rounds/${e.target.value}`)
            .then(response => {
                this.setState({ round: response.data })
            })
    }

    render() {
        return (
            <div className="Stats" >
                <h1 className="Title">History:</h1>
                <div className="Course">
                    <form onSubmit={this.handleSubmit}>
                        <label className="dropMenu">
                            Pick a Course:
                        <select onChange={this.handleCourse} >
                                <option value="course">Select</option>
                                {this.state.courseList.map(course => {
                                    return <option key={course.course_id} value={course._id}>{course.courseName}</option>
                                })}
                            </select>
                        </label>
                    </form>
                    {this.state.course &&
                        <CourseCard
                            courseName={this.state.course.courseName}
                            description={this.state.course.description}
                            tee={this.state.course.tee}
                            holes={this.state.course.holes}
                        />}
                </div>
                <div className="Round">
                    <form onSubmit={this.handleSubmit}>
                        <label className="dropMenu">
                            Pick a Round:
                        <select onChange={this.handleRound} >
                                <option value="round">Select</option>
                                {this.state.roundList.map(round => {
                                    return <option key={round.round_id} value={round._id}>{round.name} {new Date(round.date).toLocaleDateString()}</option>
                                })}
                            </select>
                        </label>
                    </form>
                    {this.state.round &&
                        <RoundCard
                            roundName={this.state.round.roundName}
                            date={this.state.round.date}
                            holes={this.state.round.holes}
                        />}
                </div>
            </div>
        )
    }
}

export default Stats