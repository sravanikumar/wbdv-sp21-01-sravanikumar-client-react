import React from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";

const LessonTabs = (
    {
        lessons = [],
        updateLesson,
        deleteLesson,
        createLesson
    }) =>
        <ul className="nav nav-tabs black-background">
            {
                lessons.map(lesson =>
                    <li className="nav-item ">
                        <a className="nav-link nav-font-dark" aria-current="page" href="#">
                            <EditableItem
                                item={lesson}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}/>
                        </a>
                    </li>
                )
            }
            <li className="nav-item">
                <a className="nav-link nav-font-dark" href="#">
                    <i onClick={createLesson} className="fa fa-plus" />
                </a>
            </li>
        </ul>


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