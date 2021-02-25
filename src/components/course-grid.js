import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        {/*<Link to="/courses/table">*/}
        {/*    <i className="fas fa-list fa-2x float-right"></i>*/}
        {/*</Link>*/}
        {/*<h2>Course Grid </h2>*/}

            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="col d-none d-md-block">
                        Recent Documents
                    </div>
                    <div className="col d-none d-md-block">
                        Owned by me
                        <a href="#">
                            <i className="fa fa-sort-down" />
                        </a>
                    </div>

                    <div className="col">
                        <Link to="/courses/table">
                            <i className="fas fa-2x fa-list float-right"></i>
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

        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        course={course}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                    />
                )
            }
        </div>
        <br/>
    </div>


export default CourseGrid