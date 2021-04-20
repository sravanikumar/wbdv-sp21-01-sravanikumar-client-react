import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, graded, updateQuestion}) => {

    return(
        <div>
                {
                    question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion
                        question={question}
                        graded={graded}
                        updateQuestion={updateQuestion}/>
                }
                {
                    question.type === "MULTIPLE_CHOICE" &&
                    <MultipleChoiceQuestion
                        question={question}
                        graded={graded}
                        updateQuestion={updateQuestion}/>
                }
        </div>
    )
}

export default Question