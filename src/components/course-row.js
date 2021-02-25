import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course
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

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>

            <td>{course.owner}</td>

            <td>{course.lastModified}</td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                {editing && <i onClick={() => saveFields()} className="fas fa-check"></i>}
            </td>
        </tr>
    )
}
export default CourseRow