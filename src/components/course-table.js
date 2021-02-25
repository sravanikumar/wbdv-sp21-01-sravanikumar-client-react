import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "./course-manager.css"

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container course-background-light">
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="col">
                            Course Name
                        </div>
                        <div className="col d-none d-md-block">
                            Owned By
                            <a href="#">
                                <i className="fa fa-sort-up" />
                            </a>
                        </div>
                        <div className="col d-none d-lg-block">
                            Last Modified
                        </div>
                        <div className="col">
                            <Link to="/courses/grid">
                                <i className="fas fa-2x fa-th float-right"></i>
                            </Link>
                            <a href="#">
                                <i className="fa fa-folder fa-2x float-right" />
                            </a>
                            <a href="#">
                                <i className="fa fa-sort fa-2x float-right" />
                            </a>

                        </div>
                    </div>
                </nav>



                {/*<table className="table">*/}
                {/*    <tbody>*/}
                {/*        {*/}
                {/*            this.props.courses.map((course, idx) =>*/}
                {/*                <CourseRow*/}
                {/*                    course={course}*/}
                {/*                    key={idx}*/}
                {/*                    deleteCourse={this.props.deleteCourse}*/}
                {/*                    updateCourse={this.props.updateCourse}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        }*/}
                {/*    </tbody>*/}
                {/*</table>*/}


                    <ul className="list-group">
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
                    </ul>

                <br />
            </div>
        );
    }
}