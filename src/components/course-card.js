import React from 'react'
import {deleteCourse} from "../services/course-service";

const CourseCard = ({course, deleteCourse}) =>
    <div className="col-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            </div>
        </div>
    </div>

export default CourseCard