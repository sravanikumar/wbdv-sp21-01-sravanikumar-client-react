import React, {useState, useEffect} from "react";
import quizService from "../../services/quizzes-service"
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])

    useEffect( () => {
        quizService.findAllQuizzes()
            .then(quizzes => setQuizzes(quizzes))
        }, [])

    return(
        <div>
            <h1>Quizzes</h1>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <Link className="list-group-item" key={quiz._id}
                                  to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;