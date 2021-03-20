import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import widgetServices, {findWidgetsForTopic} from "../../services/widget-service";
import {connect} from "react-redux";

const WidgetList = (
    {
        widgets = [],
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams()
    console.log(widgetId)
    const [widget, setWidget] = useState({})

    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic("ABC234")
        }
    }, [topicId])

    return (<div>
        <h1>Widget List</h1>
        <ul className="list-group">
            {
                widgets.map(widget =>
                    <li key={widget.id} className="list-group-item">
                        {/*{*/}
                        {/*    _widget.id === widget.id &&*/}
                        {/*    <>*/}
                        {/*        <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>*/}
                        {/*        <i onClick={() => {*/}
                        {/*            updateWidget(widget)*/}
                        {/*        }} className="fas fa-check float-right"></i>*/}
                        {/*    </>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    _widget.id !== widget.id &&*/}
                        {/*    <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    _widget.type === "HEADING" &&*/}
                        {/*    <HeadingWidget*/}
                        {/*        setWidget={setWidget}*/}
                        {/*        widget={_widget}*/}
                        {/*        editing={_widget.id === widget.id}/>*/}
                        {/*}*/}

                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                />
                        }
                        {/*{*/}
                        {/*    (_widget.type !== "PARAGRAPH" || _widget.type !== "HEADING") &&*/}
                        {/*    // alert("Widget type not supported!")*/}
                        {/*}*/}
                    </li>
                )
            }
        </ul>
    </div>)
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetServices.createWidget(topicId, {text: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },
    updateWidget: (newItem) => {
        widgetServices.updateWidget(newItem.id, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", updatedWidget: newItem}))
    },
    deleteWidget: (widgetToDelete) => {
        widgetServices.deleteWidget(widgetToDelete.id)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },
    findWidgetsForTopic: (topicId) => {
        widgetServices.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList)