import React from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";

const ModuleList = (
    {
        modules = [],
        createModule
    }) =>
    <div>
        {/*<h2>Module List</h2>*/}
        <ul className="nav flex-sm-column nav-pills nav-justified">
            {
                modules.map(module =>
                    // nav-item-editor-active
                    <li className="nav-item nav-item-editor">
                        <EditableItem item={module}/>
                        {/*<a className="nav-link nav-font-dark" aria-current="page" href="#">*/}
                        {/*    {module.title}*/}
                        {/*</a>*/}
                        {/*<i className="fa-pull-right nav-font-dark fa fa-times" />*/}
                    </li>
                )
            }
            <li className="nav-item nav-item-editor">
                <a className="nav-link nav-font-dark" aria-current="page" href="#">
                    <i onClick={createModule} className="fa fa-plus" />
                </a>
            </li>
        </ul>
    </div>

const stpm = (state) => ({
  modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    }
})

export default connect(stpm, dtpm)(ModuleList)
