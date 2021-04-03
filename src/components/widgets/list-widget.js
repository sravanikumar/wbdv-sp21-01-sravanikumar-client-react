import React, {useState} from 'react'
import {Link} from "react-router-dom";
import TypeSelection from "./type-selection";

const ListWidget = ({widget, updateWidget, deleteWidget, to, back}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    // const [ordered, setOrdered] = useState(Boolean(widgetCache.ordered))
    console.log(widgetCache)
    return (
        <div>
            {
                !editing &&
                <>
                    {
                        widgetCache && widgetCache.text && widgetCache.ordered &&
                        <div className="row">
                            <div className="col-11">
                                <ol>
                                    {
                                        widgetCache.text.split("\n").map(item => {
                                            return(
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                            <div className="col-1">
                                <Link to={to}>
                                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                                </Link>
                            </div>
                        </div>
                    }

                    {
                        widgetCache && widgetCache.text && !widgetCache.ordered &&
                        <div className="row">
                            <div className="col-11">
                                <ul>
                                    {
                                        widgetCache.text.split("\n").map(item => {
                                            return(
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-1">
                                <Link to={to}>
                                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                                </Link>
                            </div>
                        </div>
                    }
                </>
            }

            {
                editing &&
                <div className="row">
                    <div className="col-11">
                        <TypeSelection widgetCache={widgetCache} setWidgetCache={setWidgetCache}/>
                        <br/>
                        <span>
                            List Items
                            <span className="float-right">
                                {
                                    widgetCache.ordered &&
                                    <>
                                        <input type="checkbox"
                                            onChange={(e => {
                                                // setOrdered(!ordered)
                                                setWidgetCache({
                                                    ...widgetCache,
                                                    ordered: !widgetCache.ordered
                                                })
                                            })}
                                        checked/> Ordered
                                    </>
                                }
                                {
                                    !widgetCache.ordered &&
                                    <>
                                        <input type="checkbox"
                                               onChange={(e => {
                                                   // setOrdered(!ordered)
                                                   setWidgetCache({
                                                       ...widgetCache,
                                                       ordered: !widgetCache.ordered
                                                   })
                                               })}
                                        />Ordered
                                    </>
                                }
                            </span>
                        </span>
                        <textarea rows={10}
                                  value={widgetCache.text}
                                  onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
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
        </div>
    )
}

export default ListWidget