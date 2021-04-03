import React, {useState} from 'react'
import {Link} from "react-router-dom";
import TypeSelection from "./type-selection";

const ImageWidget = ({widget, updateWidget, deleteWidget, to, back}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (
        <div>

            {
                editing &&
                <div className="row">
                    <div className="col-11">
                        <TypeSelection widgetCache={widgetCache} setWidgetCache={setWidgetCache}/>
                        <br/>
                        Image URL
                        <input value={widgetCache.src} className="form-control"
                               onChange={(e) => setWidgetCache({...widgetCache, src: e.target.value})}/>
                        Width (in pixels)
                        <input value={widgetCache.width} className="form-control"
                               onChange={(e) => setWidgetCache({...widgetCache, width: parseInt(e.target.value)})}/>
                        Height (in pixels)
                        <input value={widgetCache.height} className="form-control"
                               onChange={(e) => setWidgetCache({...widgetCache, height: parseInt(e.target.value)})}/>
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
                        <img src={widgetCache.src}
                             width={widgetCache.width ? widgetCache.width : 200}
                             height={widgetCache.height ? widgetCache.height : 100}/>
                    </div>

                    <div className="col-1">
                        <Link to={to}>
                            <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default ImageWidget