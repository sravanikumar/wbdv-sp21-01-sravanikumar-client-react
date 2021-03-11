import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import "../custom-styling.css"
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import moduleService from "../../services/module-service";

const ModuleList = (
    {
        modules = [],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams()

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [courseId])

    return (<div>
        <ul className="nav flex-sm-column nav-pills nav-justified">
            {
                modules.map(module =>
                    <li className={`nav-item nav-item-editor ${module._id === moduleId ? 'nav-item-editor-active' : ''}`}
                        key={module._id}>
                        <span className="nav-link nav-font-dark"
                              aria-current="page">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                item={module}
                                updateItem={updateModule}
                                deleteItem={deleteModule}/>
                        </span>
                    </li>
                )
            }
            <li className="nav-item nav-item-editor">
                <a className="nav-link nav-font-dark" aria-current="page">
                    <i onClick={() => createModule(courseId)} className="fa fa-plus"/>
                </a>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => ({
  modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleService.createModule(courseId, {title: "New Module"})
            .then(module => dispatch({type: "CREATE_MODULE", module: module}))
    },
    updateModule: (newItem) => {
        moduleService.updateModule(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_MODULE", updatedModule: newItem}))
    },
    deleteModule: (moduleToDelete) => {
        moduleService.deleteModule(moduleToDelete._id)
            .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules
            }))
    }
})

export default connect(stpm, dtpm)(ModuleList)
