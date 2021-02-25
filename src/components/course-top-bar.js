import React from 'react'
import {Link} from "react-router-dom";
import "./course-manager.css"

const courseTopBar = () =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="col-sm-1">
                    <a href="../index.html">
                        <i className="fa fa-bars fa-2x icon-dark" />
                    </a>
                </div>
                <div className="col-2 d-none d-sm-block">
                    <a className="navbar-brand" href="#">
                        Course Manager
                    </a>
                </div>
                <div className="col-sm-8">
                    <input className="form-control" />
                </div>
                <div className="col-sm-1">
                    <a href="#">
                        <i className="float-right far fa-plus-square fa-2x icon-dark right-align" />
                    </a>
                </div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right icon-dark"></i>
                </Link>
            </div>
        </nav>
    </div>

export default courseTopBar