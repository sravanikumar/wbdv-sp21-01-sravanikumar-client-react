import React, {useState, useEffect} from "react";
import quizService from "../../services/quizzes-service"
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";

const QuizzesList = (
    {
        quizzes = [],
        findAllQuizzes,
        findQuizById
    }) => {
    const {courseId} = useParams();
    // const [quizzes, setQuizzes] = useState([])

    useEffect( () => {
        findAllQuizzes()
    }, [])

    return(
        <div>
            <h1>Quizzes</h1>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <div className="list-group-item" key={quiz._id}>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link className="btn btn-primary float-right" to="/#">
                                    {/*TODO: change href here to quiz attempts*/}
                                    Attempts
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const stpm = (state) => ({
 quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => {
    return {
        findAllQuizzes: () => {
            quizService.findAllQuizzes()
                .then(quizzes => dispatch({
                    type: 'FIND_ALL_QUIZZES',
                    quizzes: quizzes
                }))
        }
    }
}

export default connect(stpm, dtpm)(QuizzesList);