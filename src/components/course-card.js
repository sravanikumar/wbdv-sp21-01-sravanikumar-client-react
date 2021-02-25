import React, {useState} from 'react'
import {Link} from "react-router-dom";



const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveFields = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle,
            lastModified: new Date(Date.now()).toDateString()
        }
        updateCourse(newCourse)
    }

    return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">

                <div className="card">
                    <div className="card-body">
                            {
                                !editing && <h5 className="card-title">{course.title}</h5>
                            }
                            {
                                editing &&
                                <h5 className="card-title">
                                    <input
                                    onChange={(event) => setNewTitle(event.target.value)}
                                    value={newTitle}
                                    className="form-control"/>
                                </h5>
                            }

                        <p className="card-text">Some description.</p>

                        <Link to="/courses/editor" className="btn btn-primary">
                            {course.title}
                        </Link>
                        <i onClick={() => deleteCourse(course)} className="fas fa-trash float-right"></i>
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>}
                        {editing && <i onClick={() => saveFields()} className="fas fa-check float-right"></i>}
                    </div>
                </div>
            </div>
    )
}

export default CourseCard