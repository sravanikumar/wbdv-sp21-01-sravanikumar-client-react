import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {

    return(
        <div>
            <li className="list-group-item">
                {/*{question.title}*/}
                {
                    question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion
                        question={question}/>
                }
                {
                    question.type === "MULTIPLE_CHOICE" &&
                    <MultipleChoiceQuestion
                        question={question}/>
                }
            </li>
        </div>
    )
}

export default Question