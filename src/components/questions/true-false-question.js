import React, {useState} from "react";
import classNames from "classnames";

const TrueFalseQuestion = ({question}) => {
    const [choice, setChoice] = useState("")
    const [graded, setGraded] = useState(false)

    return(
        <div>
            <h4>
                {question.question}
                {
                    graded && choice === question.correct &&
                        <span>
                            &nbsp;
                            <i className="fas fa-check"></i>
                        </span>

                }

                {
                    graded && choice !== question.correct &&
                        <span>
                            &nbsp;
                            <i className="fas fa-times"></i>
                        </span>

                }
            </h4>
            {/*className={`list-group-item ${graded && choice === question.correct} ? list-group-item-success : list-group-item-danger`}*/}
            <div className="list-group">
                <div className={classNames("list-group-item",
                    {"list-group-item-success": graded && 'true' === question.correct,
                        "list-group-item-danger" : graded && choice !== question.correct && choice === "true"})}>
                    <label><input
                        type="radio"
                        onClick={() => setChoice("true")}
                        name={question._id}/>True</label>
                </div>
                <div className={classNames("list-group-item",
                    {"list-group-item-success": graded && 'false' === question.correct,
                        "list-group-item-danger" : graded && choice !== question.correct && choice === "false"}
                        )}>
                    <label><input
                        type="radio"
                        onClick={() => setChoice("false")}
                        name={question._id}/>False</label>
                </div>
            </div>
            <br/>
            <div>
                <h6>Your Answer: {choice}</h6>
                <button className="btn btn-primary"
                        onClick={() => setGraded(true)}>
                    Grade
                </button>
            </div>

        </div>
    )
}

export default TrueFalseQuestion