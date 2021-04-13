import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import questionsService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'
import Question from "../questions/question";

const Quiz = () => {
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState({})
    const {courseId, quizId} = useParams()

    useEffect(() => {
        questionsService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
        quizService.findQuizById(quizId)
            .then(quiz => setQuiz(quiz))
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
                                <Question question={question}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Quiz