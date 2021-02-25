import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-manager.css"

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
        <div>
        {/*<tr>*/}
        {/*    <td>*/}
        {/*        {*/}
        {/*            !editing &&*/}
        {/*                <div>*/}

        {/*                    <Link to="/courses/editor">*/}
        {/*                        <i className="fa fa-folder"></i>*/}
        {/*                        {course.title}*/}
        {/*                    </Link>*/}
        {/*                </div>*/}
        {/*        }*/}
        {/*        {*/}
        {/*            editing &&*/}
        {/*            <input*/}
        {/*                onChange={(event) => setNewTitle(event.target.value)}*/}
        {/*                value={newTitle}*/}
        {/*                className="form-control"/>*/}
        {/*        }*/}
        {/*    </td>*/}

        {/*    <td>{course.owner}</td>*/}

        {/*    <td>{course.lastModified}</td>*/}
        {/*    <td>*/}
        {/*        <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>*/}
        {/*        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}*/}
        {/*        {editing && <i onClick={() => saveFields()} className="fas fa-check"></i>}*/}
        {/*    </td>*/}
        {/*</tr>*/}

    <li className="list-group list-group-horizontal">
        <div className="list-group-item course-item-left col">
            {
                !editing &&
                <div>

                    <Link to="/courses/editor">
                        <i className="fa fa-folder"></i>
                        {course.title}
                    </Link>
                </div>
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </div>
        <div className="list-group-item course-item-middle col d-none d-md-block">
            {course.owner}
        </div>
        <div className="list-group-item course-item-middle col d-none d-lg-block">
            {course.lastModified}
        </div>
        <div className="list-group-item course-item-right col">
            <i onClick={() => deleteCourse(course)} className="fas fa-trash float-right"></i>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>}
            {editing && <i onClick={() => saveFields()} className="fas fa-check float-right"></i>}
        </div>
    </li>

        </div>

)
}
export default CourseRow