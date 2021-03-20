import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ParagraphWidget = ({widget, updateWidget, deleteWidget, to}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (<div>
        {/*<h2>*/}
        {/*    Paragraph Widget {widget.id}*/}
        {
            editing &&
                <div>
                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(widgetCache)
                    }} className="fas fa-check float-right"></i>

                    <i onClick={() => {
                        setEditing(false)
                        deleteWidget(widget)
                    }} className="fas fa-trash float-right"></i>
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
                {/*<i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>*/}
                <p>
                    {widget.text}
                </p>
            </div>
        }
        {/*</h2>*/}
    </div>)
}

export default ParagraphWidget