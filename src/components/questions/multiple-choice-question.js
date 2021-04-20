import React, {useState} from "react";
import classNames from "classnames";

const MultipleChoiceQuestion = ({question, graded, updateQuestion}) => {
    const [curChoice, setCurChoice] = useState("")
    // const [graded, setGraded] = useState(false)

    return (
        <div>
            <h4>
                {question.question}
                {
                    graded && curChoice === question.correct &&
                    <span>
                            &nbsp;
                        <i className="fas fa-check icon-green"></i>
                        </span>

                }

                {
                    graded && curChoice !== question.correct &&
                    <span>
                            &nbsp;
                        <i className="fas fa-times icon-red"></i>
                        </span>

                }
            </h4>
            <div className="list-group">
                {
                    question.choices.map((choice, index) => {
                        return (
                            <div key={index} className={classNames("list-group-item",
                                {
                                    "list-group-item-success": graded && choice === question.correct,
                                    "list-group-item-danger": graded && curChoice !== question.correct && choice === curChoice
                                })}>
                                <label><input
                                    type="radio"
                                    onClick={() => {
                                        setCurChoice(choice)
                                        updateQuestion({...question, answer: choice})
                                    }}
                                    name={question._id}/>{choice}</label>
                            </div>
                        )
                    })
                }
            </div>
            <br/>
            <div>
                <h6>Your Answer: {curChoice}</h6>
                {/*<button className="btn btn-primary"*/}
                {/*        onClick={() => setGraded(true)}>*/}
                {/*    Grade*/}
                {/*</button>*/}
            </div>

        </div>
    )
}

export default MultipleChoiceQuestion