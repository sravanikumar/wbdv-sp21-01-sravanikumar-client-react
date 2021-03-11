import React from 'react'
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

const CourseEditor = ({history}) =>
    <Provider store={store}>
        <div>
            <div>
                {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">*/}
                {/*    <div className="container nav-font-dark">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-2">*/}
                {/*                <i onClick={() => history.goBack()}*/}
                {/*                   className="fas fa-times float-right"></i>*/}
                {/*            </div>*/}
                {/*            <div className="col-2">*/}
                {/*                <h4 className="pull-left">Course Name</h4>*/}
                {/*            </div>*/}
                {/*            <div className="col-8">*/}
                {/*                <LessonTabs/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</nav>*/}
                {/*<div className="row black-background">*/}
                {/*    <br/>*/}
                {/*    <div className="container nav-font-dark">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-2">*/}
                {/*                <i onClick={() => history.goBack()}*/}
                {/*                   className="fas fa-times float-right"></i>*/}
                {/*            </div>*/}
                {/*            <div className="col-2">*/}
                {/*                <h4 className="pull-left">Course Name</h4>*/}
                {/*            </div>*/}
                {/*            <div className="col-8">*/}
                {/*                <LessonTabs/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="row">
                    <div className="col-4">
                        <i onClick={() => history.goBack()}
                           className="fas fa-times fa-2x"></i>
                    </div>
                    <div className="col-8">
                        <h3 className="pull-left">Course Name</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="container offwhite-background">
                            <br />
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
    </Provider>


export default CourseEditor