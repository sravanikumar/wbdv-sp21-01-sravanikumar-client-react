import React from 'react'
import {connect} from 'react-redux'
import "./course-editor.css"

const ModuleList = ({modules = []}) =>
    <div>
        {/*<h2>Module List</h2>*/}
        <ul className="nav flex-sm-column nav-pills nav-justified">
            {
                modules.map(module =>
                    // nav-item-editor-active
                    <li className="nav-item nav-item-editor">
                        <a className="nav-link nav-font-dark" aria-current="page" href="#">
                            {module.title}
                        </a>
                        <i className="pull-right nav-font-dark fa fa-times" />
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => ({
  modules: state.modules
})

const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(ModuleList)
