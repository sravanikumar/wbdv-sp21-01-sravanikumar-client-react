import React from 'react'
import {useParams} from 'react-router-dom'
import "../custom-styling.css"
import moduleReducer from "../../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import lessonReducer from "../../reducers/lesson-reducer";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()

    return (<Provider store={store}>
        <div>
            <div>
                <div className="row black-background nav-font-dark">
                    <div className="col-4">
                        <i onClick={() => history.goBack()}
                           className="fas fa-times fa-2x"></i>
                    </div>
                    <div className="col-8">
                        <h3 className="pull-left">
                            Course Name {layout} {courseId}
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="container offwhite-background">
                            <br/>
                            <ModuleList/>
                        </div>
                    </div>
                    <div className="col-8 lightblue-background">
                        <LessonTabs/>
                        <br/>
                        <TopicPills/>
                    </div>
                </div>
            </div>

        </div>
    </Provider>)
}


export default CourseEditor