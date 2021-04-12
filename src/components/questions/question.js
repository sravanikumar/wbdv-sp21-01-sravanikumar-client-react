import React from "react";

const Question = ({question}) => {

    return(
        <div>
            <li className="list-group-item">
                {question.title}
            </li>
        </div>
    )
}

export default Question