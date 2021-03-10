import React from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";

const TopicPills = (
    {
        topics = [],
        updateTopic,
        deleteTopic,
        createTopic
    }) =>
    <ul className="nav nav-pills">
        {
            topics.map(topic =>
                <li className="nav-item">
                    <a className="nav-link nav-font-dark nav-pills-editor-active" aria-current="page" href="#">
                        <EditableItem
                            item={topic}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}/>
                    </a>
                </li>
            )
        }
        <li className="nav-item nav-pills-editor">
            <a className="nav-link nav-font-dark" href="#">
                <i onClick={createTopic} className="fa fa-plus" />
            </a>
        </li>
    </ul>

// <ul className="nav nav-pills">
//     <li className="nav-item">
//         <a className="nav-link nav-font-dark nav-pills-editor-active" aria-current="page" href="#">
//             Topic 1
//         </a>
//     </li>
//     <li className="nav-item nav-pills-editor">
//         <a className="nav-link nav-font-dark" href="#">
//             Topic 2
//         </a>
//     </li>
//     <li className="nav-item nav-pills-editor">
//         <a className="nav-link nav-font-dark" href="#">
//             Topic 3
//         </a>
//     </li>
//     <li className="nav-item nav-pills-editor">
//         <a className="nav-link nav-font-dark" href="#">
//             Topic 4
//         </a>
//     </li>
//     <li className="nav-item nav-pills-editor">
//         <a className="nav-link nav-font-dark" href="#">
//             <i className="fa fa-plus" />
//         </a>
//     </li>
// </ul>


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