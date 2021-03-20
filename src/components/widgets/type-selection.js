import React from 'react'
import {updateWidget} from "../../services/widget-service";

const TypeSelection = ({widgetCache, setWidgetCache}) =>
    <>
        <select onChange={(e) => {
            if (e.target.value === "HEADING" || e.target.value === "PARAGRAPH") {
                setWidgetCache({...widgetCache, type : e.target.value})
            } else {
                alert("Widget type not yet supported!")
            }
        }
        }
                value={widgetCache.type}
                className="form-control">
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"VIDEO"}>Video</option>
            <option value={"IMAGE"}>Image</option>
            <option value={"LINK"}>Link</option>
            <option value={"LIST"}>List</option>
            <option value={"HTML"}>HTML</option>
        </select>
    </>

export default TypeSelection