import React from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";

const ModuleList = (
    {
        modules = [],
        createModule,
        updateModule,
        deleteModule
    }) =>
    <div>
        {/*<h2>Module List</h2>*/}
        <ul className="nav flex-sm-column nav-pills nav-justified">
            {
                modules.map(module =>
                    // nav-item-editor-active
                    <li className="nav-item nav-item-editor">
                        <a className="nav-link nav-font-dark" aria-current="page" href="#">
                            <EditableItem
                                item={module}
                                updateItem={updateModule}
                                deleteItem={deleteModule}/>
                        </a>
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
    },
    updateModule: (newItem) => {
        dispatch({type: "UPDATE_MODULE", updatedModule: newItem})
    },
    deleteModule: (moduleToDelete) => {
        dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete})
    }
})

export default connect(stpm, dtpm)(ModuleList)
