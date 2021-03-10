import React from 'react'
import "../custom-styling.css"
import moduleReducer from "../../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import lessonReducer from "../../reducers/lesson-reducer";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) =>
    <Provider store={store}>
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container nav-font-dark">
                        <div className="row">
                            <div className="col-2">
                                <i onClick={() => history.goBack()}
                                   className="fas fa-times float-right"></i>
                            </div>
                            <div className="col-2">
                                <h4 className="pull-left">Course Name</h4>
                            </div>
                            <div className="col-8">
                                <LessonTabs/>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-4">
                        <div className="container offwhite-background">
                            <br />
                            <ModuleList/>
                            {/*<li className="nav-item nav-item-editor">*/}
                            {/*    <a className="nav-link nav-font-dark" aria-current="page" href="#">*/}
                            {/*        Module 4*/}
                            {/*        <i className="pull-right fa fa-times" />*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </div>
                    </div>
                    <div className="col-8 lightblue-background">
                        <div className="container">
                            <br />
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link nav-font-dark nav-pills-editor-active" aria-current="page" href="#">
                                        Topic 1
                                    </a>
                                </li>
                                <li className="nav-item nav-pills-editor">
                                    <a className="nav-link nav-font-dark" href="#">
                                        Topic 2
                                    </a>
                                </li>
                                <li className="nav-item nav-pills-editor">
                                    <a className="nav-link nav-font-dark" href="#">
                                        Topic 3
                                    </a>
                                </li>
                                <li className="nav-item nav-pills-editor">
                                    <a className="nav-link nav-font-dark" href="#">
                                        Topic 4
                                    </a>
                                </li>
                                <li className="nav-item nav-pills-editor">
                                    <a className="nav-link nav-font-dark" href="#">
                                        <i className="fa fa-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Provider>


export default CourseEditor