import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {
    render() {
        return (
            <div>
              <h2>Course Table</h2>
                <table className="table">
                    <CourseRow/>
                </table>
            </div>
        );
    }
}