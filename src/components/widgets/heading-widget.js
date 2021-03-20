import React, {useState} from 'react'
import {Link} from "react-router-dom";
import TypeSelection from "./type-selection";

const HeadingWidget = ({widget, updateWidget, deleteWidget, to, back}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (
        <div>
            {
                !editing &&
                <div className="row">
                    <div className="col-11">
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </div>

                    <div className="col-1">
                        <Link to={to}>
                            <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                        </Link>
                    </div>
                </div>
            }
            {
                editing &&
                <div className="row">
                    <div className="col-11">
                        <TypeSelection widgetCache={widgetCache} setWidgetCache={setWidgetCache}/>
                        <br/>
                        <input onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                               value={widgetCache.text}
                               className="form-control"/>
                        <br/>
                        <select onChange={(e) => setWidgetCache({...widgetCache, size: parseInt(e.target.value)})}
                                value={widgetCache.size} className="form-control">
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
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

        </div>
    )
}
export default HeadingWidget