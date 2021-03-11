import React from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'

const TopicPills = (
    {
        topics = [],
        updateTopic,
        deleteTopic,
        createTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    return (<ul className="nav nav-pills">
        {
            topics.map(topic =>
                <li className="nav-item">
                    <a className="nav-link nav-font-dark nav-pills-editor-active" aria-current="page" href="#">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            item={topic}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}/>
                    </a>
                </li>
            )
        }
        <li className="nav-item nav-pills-editor">
            <a className="nav-link nav-font-dark" href="#">
                <i onClick={createTopic} className="fa fa-plus"/>
            </a>
        </li>
    </ul>)
}



const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: () => {
        dispatch({type: "CREATE_TOPIC"})
    },
    updateTopic: (newItem) => {
        dispatch({type: "UPDATE_TOPIC", updatedTopic: newItem})
    },
    deleteTopic: (topicToDelete) => {
        dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete})
    }
})

export default connect(stpm, dtpm)(TopicPills)