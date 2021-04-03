import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ImageWidget = ({widget, updateWidget, deleteWidget, to, back}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (
        <div>

            {
                editing &&
                <div className="row">
                    <div className="col-11">
                        URL
                        <input value={widget.url} className="form-control"/>
                        width
                        <input value={widget.width} className="form-control"/>
                        height
                        <input value={widget.height} className="form-control"/>
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