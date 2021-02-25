import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
              <h2>Course Table</h2>
                <table className="table">
                    <tbody>
                        {
                            this.props.courses.map((course, idx) =>
                                <CourseRow
                                    course={course}
                                    key={idx}
                                    deleteCourse={this.props.deleteCourse}
                                    updateCourse={this.props.updateCourse}
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}