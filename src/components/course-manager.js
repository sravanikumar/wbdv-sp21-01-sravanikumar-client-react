import React from 'react'
import {Link, Route} from "react-router-dom";
import CourseEditor from "./course-editor";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseTopBar from "./course-top-bar"
import courseService from "../services/course-service";
import "./course-manager.css"

export default class CourseManager extends React.Component {
    state = {
        courses: []
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = (newCourse) => {
        // const newCourse = {
        //     title: course.title,
        //     owner: course.owner,
        //     lastModified: course.lastModified
        // }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [

                        ...prevState.courses,
                        course

                    ]
                })))
    }


    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    render() {
        return(
            <div className="container-fluid course-background-light">
                <CourseTopBar addCourse={this.addCourse}/>
                <Route path={["/courses", "/courses/table"]} exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/editor" exact={true}*/}
                {/*       render={(props) => <CourseEditor {...props}/>}>*/}
                {/*</Route>*/}
            </div>
        )
    }
}

