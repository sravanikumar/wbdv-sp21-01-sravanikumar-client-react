import React from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";

const LessonTabs = (
    {
        lessons = []
    }) =>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        {/*<EditableItem item={lesson}/>*/}
                        <a className="nav-link nav-font-dark" aria-current="page" href="#">
                            {lesson.title}
                        </a>
                    </li>
                )
            }
        </ul>


const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(LessonTabs)