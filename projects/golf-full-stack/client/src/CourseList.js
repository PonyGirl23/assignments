// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Course from './Course'
// import { getCourses } from './redux'

// class CourseList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { value: 'Course Name'};
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     componentDidMount() {
//         this.props.getCourses();
//     }
//     handleChange(e) {
//         this.setState({ value: e.target.value });
//     }
//     handleSubmit(e) {
//         e.preventDefault()
//     }
//     render() {
//         const crsList = this.props.courses.filter(course => course.data === this.state.value).map(course => {
//             return(
//                 <Course 
//                 key={course.data}
//                 />
//             )
//         })
//     }
// }



// export default connect(state => state, { getCourses })(CourseList)