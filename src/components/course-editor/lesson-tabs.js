import React from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'


const LessonTabs = (
    {
        lessons = [],
        updateLesson,
        deleteLesson,
        createLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    return (<ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li className="nav-item">
                    <a className="nav-link nav-font-dark tab-item" aria-current="page" href="#">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}/>
                    </a>
                </li>
            )
        }
        <li className="nav-item">
            <a className="nav-link nav-font-dark tab-item" href="#">
                <i onClick={createLesson} className="fa fa-plus"/>
            </a>
        </li>
    </ul>)
}


const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: () => {
        dispatch({type: "CREATE_LESSON"})
    },
    updateLesson: (newItem) => {
        dispatch({type: "UPDATE_LESSON", updatedLesson: newItem})
    },
    deleteLesson: (lessonToDelete) => {
        dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete})
    }
})

export default connect(stpm, dtpm)(LessonTabs)