import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./custom-styling.css"

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return(
        <>
            {
                !editing &&
                <>
                    <Link to={to}>
                        <span className="nav-font-dark">
                            {item.title}
                        </span>
                    </Link>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit nav-font-dark fa-pull-right"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>

                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check nav-font-dark"></i>

                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }} className="fas fa-times nav-font-dark"></i>
                </>
            }
        </>
    )
}


export default EditableItem