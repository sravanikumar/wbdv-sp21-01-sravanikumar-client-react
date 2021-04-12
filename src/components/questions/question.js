import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {

    return(
        <div>
            <div className="list-group-item">
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
            </div>
        </div>
    )
}

export default Question