import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import questionsService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'
import quizAttemptService from '../../services/quiz-attempts-service'
import Question from "../questions/question";
import {connect} from "react-redux";

const Quiz = (
    {
        questions = [],
        quizzes = [],
        findQuestionsForQuiz,
        findQuizById,
        findAllQuizzes,
        submitQuiz,
        updateQuestion
    }) => {

    // const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState("")
    const [graded, setGraded] = useState(false)
    const {courseId, quizId} = useParams()

    useEffect(() => {
        if (quizId !== "undefined" && typeof quizId !== "undefined") {
            findQuestionsForQuiz(quizId)
            // console.log("after", questions)
            findAllQuizzes()
            const curQuiz = quizzes.find(quiz => quiz._id === quizId)
            setQuiz(curQuiz)
            // const quizCur = findQuizById(quizId)
            // // console.log("from", findQuizById(quizId))
            // setQuiz(quizCur)
        }
    }, [])

    return (
        <div>
            <h2>
                {quiz.title}
            </h2>
            <div className="list-group">
                {
                    questions.map((question) => {
                        return (
                            <div key={question._id} className="list-group-item">
                                <Question question={question}
                                          graded={graded}
                                          updateQuestion={updateQuestion}/>
                            </div>
                        )
                    })
                }
                <button className="btn btn-success"
                        onClick={() => {
                            setGraded(true)
                            submitQuiz(quizId, questions)
                        }}>
                    Submit
                </button>
            </div>

        </div>
    )
}

const stpm = (state) => ({
    questions: state.questionReducer.questions,
    quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => ({
    findQuestionsForQuiz: (quizId) => {
        questionsService.findQuestionsForQuiz(quizId)
            .then(questions => {
                // console.log("dispatch", questions)
                return (dispatch({
                    type: "FIND_QUESTIONS_FOR_QUIZ",
                    questions: questions
                }))
            })
    },
    findAllQuizzes: () => {
      quizService.findAllQuizzes()
          .then(quizzes => dispatch({
              type: "FIND_ALL_QUIZZES",
              quizzes: quizzes
          }))
    },
    findQuizById: (quizId) => {
        quizService.findQuizById(quizId)
            .then(quiz => {
                // console.log(quiz)
                return (dispatch({
                    type: "FIND_QUIZ_BY_ID",
                    quiz: quiz
                }))
            })
    },
    submitQuiz: (quizId, questions) => {
        quizAttemptService.submitQuiz(quizId, questions)
            .then(quizAttempt => dispatch({
                type: "SUBMIT_QUIZ",
                quizAttempt: quizAttempt
            }))
        // console.log("submit", questions)
    },
    updateQuestion: (question) => dispatch({
        type: "UPDATE_QUESTION",
        question: question
    })
})

export default connect(stpm, dtpm)(Quiz)