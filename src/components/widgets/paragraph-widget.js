import React, {useState} from 'react'
import {Link} from "react-router-dom";
import TypeSelection from "./type-selection";

const ParagraphWidget = ({widget, updateWidget, deleteWidget, to, back}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (
        <>
        {
            editing &&
                <div className="row">
                    <div className="col-11">
                        <TypeSelection widgetCache={widgetCache} setWidgetCache={setWidgetCache}/>
                        <br/>
                        <textarea
                            onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                            value={widgetCache.text}
                            className="form-control"></textarea>
                    </div>

                    <div className="col-1">
                        <Link to={back}>
                            <i onClick={() => {
                                setEditing(false)
                                updateWidget(widgetCache)
                            }} className="fas fa-check float-right"></i>

                            <i onClick={() => {
                                setEditing(false)
                                deleteWidget(widget)
                            }} className="fas fa-trash float-right"></i>
                        </Link>
                    </div>
                </div>
        }
        {
            !editing &&
            <div className="row">
                <div className="col-11">
                    <p>
                        {widget.text}
                    </p>
                </div>

                <div className="col-1">
                    <Link to={to}>
                        <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    </Link>
                </div>
            </div>
        }
    </>
    )
}

export default ParagraphWidget