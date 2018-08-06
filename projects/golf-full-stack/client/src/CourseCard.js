import React from 'react'

function CourseCard(props) {
    return (
        <div className="courseCard">
            <div>Course Name: {props.courseName}</div>
            <div>Description: {props.description}</div>
            <div>Tee: {props.tee}</div>
            <div>Holes:
                {props.holes.map(hole => {
                    return (
                        <div>
                        <div>Hole Number:{hole.num} </div>
                        <div>Par:{hole.par} </div>
                        <div>Yards:{hole.yards} </div>
                        </div>
                    )
                })
                }
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default CourseCard