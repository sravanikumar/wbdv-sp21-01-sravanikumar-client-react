import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import topicServices from "../../services/topic-service"


const TopicPills = (
    {
        topics = [],
        updateTopic,
        deleteTopic,
        createTopic,
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()

    useEffect( () => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

    return (<ul className="nav nav-pills">
        {
            topics.map(topic =>
                <li className="nav-item" key={topic._id}>
                    <span className={`nav-link nav-font-dark ${topic._id === topicId ? 'nav-pills-editor-active' : 'nav-pills-editor'}`}
                          aria-current="page">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            item={topic}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}/>
                    </span>
                </li>
            )
        }
        <li className="nav-item nav-pills-editor">
            <a className="nav-link nav-font-dark" href="#">
                <i onClick={() => createTopic(lessonId)} className="fa fa-plus"/>
            </a>
        </li>
    </ul>)
}



const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicServices.createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    updateTopic: (newItem) => {
        topicServices.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updatedTopic: newItem}))
    },
    deleteTopic: (topicToDelete) => {
        topicServices.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    findTopicsForLesson: (lessonId) => {
        topicServices.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)