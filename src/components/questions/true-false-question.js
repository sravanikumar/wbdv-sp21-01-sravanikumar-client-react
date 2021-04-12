import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [graded, setGraded] = useState(false)

    return(
        <div>
            <h4>
                {question.question}
                {
                    graded && answer === question.correct &&
                        <span>
                            &nbsp;
                            <i className="fas fa-check"></i>
                        </span>

                }

                {
                    graded && answer !== question.correct &&
                        <span>
                            &nbsp;
                            <i className="fas fa-times"></i>
                        </span>

                }
            </h4>

            <div className="list-group">
                <div className="list-group-item">
                    <label><input
                        type="radio"
                        onClick={() => setAnswer("true")}
                        name={question._id}/>True</label>
                </div>
                <div className="list-group-item">
                    <label><input
                        type="radio"
                        onClick={() => setAnswer("false")}
                        name={question._id}/>False</label>
                </div>
            </div>
            <br/>
            <div>
                <h6>Your Answer: {answer}</h6>
                <button className="btn btn-primary"
                        onClick={() => setGraded(true)}>
                    Grade
                </button>
            </div>

        </div>
    )
}

export default TrueFalseQuestion