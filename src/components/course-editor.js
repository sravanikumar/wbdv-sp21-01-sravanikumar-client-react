import React from 'react'
import "./course-editor.css"


const CourseEditor = ({history}) =>
    <div>
        {/*<h2>*/}
        {/*    Course Editor*/}
        {/*</h2>*/}
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container nav-font-dark">
                    <div className="col-2">
                        <i onClick={() => history.goBack()}
                           className="fas fa-times float-right"></i>
                    </div>
                    <div className="col-2">
                        <h4 className="pull-left">Course Name</h4>
                    </div>
                    <div className="col-8">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Build
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active nav-font-dark" href="#">
                                    Pages
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-font-dark" href="#">
                                    Theme
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-font-dark" href="#">
                                    Store
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-font-dark" href="#">
                                    Apps
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-font-dark" href="#">
                                    Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-font-dark" href="#">
                                    <i className="fa fa-plus" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-4">
                    <div className="container offwhite-background">
                        <br />
                        <ul className="nav flex-sm-column nav-pills nav-justified">
                            <li className="nav-item nav-item-editor nav-item-editor-active">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Module 1
                                    <i className="pull-right fa fa-times" />
                                </a>
                            </li>
                            <li className="nav-item nav-item-editor">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Module 2
                                    <i className="pull-right fa fa-times" />
                                </a>
                            </li>
                            <li className="nav-item nav-item-editor">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Module 3
                                    <i className="pull-right fa fa-times" />
                                </a>
                            </li>
                            <li className="nav-item nav-item-editor">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Module 4
                                    <i className="pull-right fa fa-times" />
                                </a>
                            </li>
                            <li className="nav-item nav-item-editor">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Module 5
                                    <i className="pull-right fa fa-times" />
                                </a>
                            </li>
                            <li className="nav-item nav-item-editor">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Module 6
                                    <i className="pull-right fa fa-times" />
                                </a>
                            </li>
                            <li className="nav-item nav-item-editor">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    Module 7
                                    <i className="pull-right fa fa-times" />
                                </a>
                            </li>
                            <li className="nav-item nav-item-editor">
                                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                                    <i className="fa fa-plus" />
                                    Add Module
                                </a>
                            </li>
                        </ul>
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


export default CourseEditor