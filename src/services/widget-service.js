const TOPICS_URL = process.env.REACT_APP_TOPICS_URL //"http://localhost:8080/api/topics" //"https://wbdv-sp21-sravani-server-java.herokuapp.com/api/topics"//
const WIDGETS_URL = process.env.REACT_APP_WIDGETS_URL   //"http://localhost:8080/api/widgets" //"https://wbdv-sp21-sravani-server-java.herokuapp.com/api/widgets" //

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(WIDGETS_URL)
        .then(response => response.json())

export const findWidgetById = (widgetId) => {
    return fetch(`${WIDGETS_URL}/${widgetId}`)
        .then(response => response.json())
}

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export default {
    findWidgetsForTopic, createWidget, updateWidget, deleteWidget, findWidgetById, findAllWidgets
}
