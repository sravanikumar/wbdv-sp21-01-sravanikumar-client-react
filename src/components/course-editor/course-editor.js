import React, {useEffect, useState} from 'react'
import {Link, useParams, Route} from 'react-router-dom'
import "../custom-styling.css"
import moduleReducer from "../../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import lessonReducer from "../../reducers/lesson-reducer";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service"
import WidgetList from "../widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    const [title, setTitle] = useState('')
    useEffect(() => {
        courseService.findCourseById(courseId)
            .then(course => setTitle(course.title))
    })

    return (<Provider store={store}>
        <div>
            <div>
                <div className="row black-background nav-font-dark">
                    <div className="col-4">
                        <Link to={`/courses/${layout}`}>
                            <i className="fas fa-times fa-2x nav-font-dark"></i>
                        {/*    onClick={() => history.goBack()}*/}
                        </Link>
                    </div>
                    <div className="col-8">
                        <h3 className="pull-left">
                            {/*Course Name*/}
                            {title}
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
                        <Route path={["/courses/:layout/edit/:courseId/modules/:moduleId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetType/:widgetId"]}
                               exact={true}>
                            <LessonTabs/>
                        </Route>
                        <br/>
                        <Route path={["/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetType/:widgetId"]}
                               exact={true}>
                            <TopicPills/>
                        </Route>
                        <br/>
                        <Route path={["/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetType/:widgetId"]}
                               exact={true}>
                            <WidgetList/>
                        </Route>
                    </div>
                </div>
            </div>

        </div>
    </Provider>)
}


export default CourseEditor