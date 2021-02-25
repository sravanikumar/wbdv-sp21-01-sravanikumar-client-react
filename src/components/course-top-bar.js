import React, {useState}  from 'react'
import {Link} from "react-router-dom";
import "./course-manager.css"

const CourseTopBar = ({addCourse}) =>

    {
        let [newTitle, setNewTitle] = useState("")



        const saveFields = () => {
            const newCourse = {
                owner: "New Owner",
                title: newTitle,
                lastModified: new Date(Date.now()).toDateString()
            }
            addCourse(newCourse)
            setNewTitle("")
        }

        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <div className="col-sm-1">
                            <Link to="/">
                                <i className="fa fa-bars fa-2x icon-dark" />
                            </Link>
                        </div>
                        <div className="col-2 d-none d-lg-block">
                            <a className="navbar-brand" href="#">
                                Course Manager
                            </a>
                        </div>
                        <div className="col-sm-8">
                            <input
                                onChange={(event) => setNewTitle(event.target.value)}
                                value={newTitle}
                                className="form-control"/>
                        </div>
                        <div className="col-sm-1">
                            <a href="#">
                                <i className="float-right far fa-plus-square fa-2x icon-dark right-align"
                                   onClick={saveFields}
                                   type={"submit"}/>
                            </a>
                        </div>
                        {/*<Link to="/">*/}
                        {/*    <i className="fas fa-2x fa-home float-right icon-dark"></i>*/}
                        {/*</Link>*/}
                    </div>
                </nav>
                <a href="#">
                    <i className="float-right far fa-plus-square fa-4x my-plus-stuck-at-bottom-right"
                       onClick={() => saveFields()}
                       type={"submit"}/>
                </a>
            </div>
    )}

export default CourseTopBar