import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import {useParams} from 'react-router-dom'
import quizAttemptsService from "../../services/quiz-attempts-service"
import quizService from "../../services/quizzes-service"
import Question from "../questions/question";

const QuizAttempts = (
    {
        quizAttempts = [],
        quizzes = [],
        findAttemptsForQuiz,
        findQuizById,
        findAllQuizzes
    }) => {

    const {quizId} = useParams()
    const [quiz, setQuiz] = useState({})

    useEffect(() => {
        findAttemptsForQuiz(quizId)
        findAllQuizzes()
        const curQuiz = quizzes.find(quiz => quiz._id === quizId)
        setQuiz(curQuiz)
        // setQuiz(findQuizById(quizId))
    }, [])

    return(
        <div>
            <h2>
                {quiz.title}
            </h2>
            <div className="list-group">
                {
                    quizAttempts.map((attempt, index) =>
                        <div className="list-group-item" key={index}>
                            <h5>Attempt #{index + 1}</h5>
                            <h5>Score: {Math.round(attempt.score)}%</h5>
                            <div className="list-group">
                                {
                                    attempt.answers.map((question) => {
                                        return (
                                            <div key={question._id} className="list-group-item">
                                                <Question question={question}
                                                          graded={true}
                                                          updateQuestion={(question) => {}}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const stpm = (state) => ({
    quizAttempts: state.quizAttemptReducer.quizAttempts,
    quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => ({
    findAttemptsForQuiz: (quizId) => {
        quizAttemptsService.findAttemptsForQuiz(quizId)
            .then(quizAttempts => dispatch({
                type: "FIND_ATTEMPTS_FOR_QUIZ",
                quizAttempts: quizAttempts
            }))
    },
    findQuizById: (quizId) => {
        quizService.findQuizById(quizId)
            .then(quiz => dispatch({
                type: "FIND_QUIZ_BY_ID",
                quiz: quiz
            }))
    },
    findAllQuizzes: () => {
        quizService.findAllQuizzes()
            .then(quizzes => dispatch({
                type: "FIND_ALL_QUIZZES",
                quizzes: quizzes
            }))
    },
})

export default connect(stpm, dtpm)(QuizAttempts)