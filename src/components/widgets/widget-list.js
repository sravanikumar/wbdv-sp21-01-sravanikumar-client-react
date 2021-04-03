import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import widgetServices from "../../services/widget-service";
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets = [],
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetType, widgetId} = useParams()

    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])
    console.log(widgetType)
    return (<div>
        <i onClick={() => createWidget(topicId)}
           className="fas fa-plus fa-2x float-right"></i>
        <br/>
        <ul className="list-group">
            {
                widgets.map(widget =>
                    <li key={widget.id} className="list-group-item">
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}
                                back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.type}/${widget.id}`}
                            />
                        }

                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}
                                back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.type}/${widget.id}`}
                                />
                        }

                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}
                                back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.type}/${widget.id}`}
                            />
                        }

                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}
                                back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.type}/${widget.id}`}
                            />
                        }

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
        widgetServices.createWidget(topicId, {text: "New Widget", type: "HEADING", size: 1})
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