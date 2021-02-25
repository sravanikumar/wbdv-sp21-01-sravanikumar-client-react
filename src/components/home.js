import React from 'react'
import {Link, Route} from "react-router-dom";
import CourseManager from "./course-manager";

export default () =>
    <div>
            <h1>Home</h1>
            <div className="list-group">
                <Link to="/courses/table" className="list-group-item">
                    Courses Table
                </Link>
                <Link to="/courses/grid" className="list-group-item">
                    Courses Grid
                </Link>
                <Link to="/courses/editor" className="list-group-item">
                    Course Editor
                </Link>
            </div>

        {/*<Route path={["/courses", "/courses/table"]}>*/}
        {/*    <CourseManager/>*/}
        {/*</Route>*/}

    </div>