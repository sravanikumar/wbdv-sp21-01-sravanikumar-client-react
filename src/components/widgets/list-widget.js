import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ListWidget = ({widget, updateWidget, deleteWidget, to, back}) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (
        <div>
            {
                !editing &&
                <>
                    {
                        widget && widget.text && widget.ordered &&
                        <div className="row">
                            <div className="col-11">
                                <ol>
                                    {
                                        widget.text.split("\n").map(item => {
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
                        widget && widget.text && !widget.ordered &&
                        <div className="row">
                            <div className="col-11">
                                <ul>
                                    {
                                        widget.text.split("\n").map(item => {
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
                <div>
                    <input type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea rows={10} value={widget.text} className="form-control">

                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget