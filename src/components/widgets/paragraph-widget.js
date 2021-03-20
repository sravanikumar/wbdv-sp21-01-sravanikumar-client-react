import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ParagraphWidget = ({widget, updateWidget, deleteWidget, to, back}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (
        <div>
        {
            editing &&
                <div>
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
                    <textarea
                        onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                        value={widgetCache.text}
                        className="form-control"></textarea>
                </div>
        }
        {
            !editing &&
            <div>
                <Link to={to}>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                </Link>
                <p>
                    {widget.text}
                </p>
            </div>
        }
    </div>
    )
}

export default ParagraphWidget