import React, {useState} from "react";
import classNames from "classnames";

const TrueFalseQuestion = ({question, graded, updateQuestion}) => {
    const [curChoice, setCurChoice] = useState("")
    // const [graded, setGraded] = useState(false)

    return(
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
            {/*className={`list-group-item ${graded && choice === question.correct} ? list-group-item-success : list-group-item-danger`}*/}
            <div className="list-group">
                <div className={classNames("list-group-item",
                    {"list-group-item-success": graded && 'true' === question.correct,
                        "list-group-item-danger" : graded && question.answer !== question.correct && curChoice === "true"})}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            setCurChoice("true")
                            updateQuestion({...question, answer:"true"})
                            // console.log("updated answer", question)
                        }}
                        name={question._id}/>True</label>
                </div>
                <div className={classNames("list-group-item",
                    {"list-group-item-success": graded && 'false' === question.correct,
                        "list-group-item-danger" : graded && question.answer !== question.correct && curChoice === "false"}
                        )}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            setCurChoice("false")
                            updateQuestion({...question, answer:"false"})
                            // console.log("updated answer", question)
                        }}
                        name={question._id}/>False</label>
                </div>
            </div>
            <br/>
            <div>
                <h6>Your Answer: {question.answer}</h6>
                {/*<button className="btn btn-primary"*/}
                {/*        onClick={() => setGraded(true)}>*/}
                {/*    Grade*/}
                {/*</button>*/}
            </div>

        </div>
    )
}

export default TrueFalseQuestion