import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
        lessons = [],
        updateLesson,
        deleteLesson,
        createLesson,
        findLessonsForModule
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    useEffect( () => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return (<ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li className={`nav-item`}
                    key={lesson._id}>
                    <span className={`nav-link nav-font-dark tab-item ${lesson._id === lessonId ? 'tab-item-active' : ''}`}
                          aria-current="page">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}/>
                    </span>
                </li>
            )
        }
        <li className="nav-item">
            <a className="nav-link nav-font-dark tab-item" href="#">
                <i onClick={() => createLesson(moduleId)} className="fa fa-plus"/>
            </a>
        </li>
    </ul>)
}


const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: (moduleId) => {
        console.log(moduleId + "create lesson")
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updatedLesson: newItem}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)