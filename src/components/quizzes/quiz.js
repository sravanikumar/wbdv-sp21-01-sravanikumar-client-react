import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import questionsService from '../../services/questions-service'
import Question from "../questions/question";

const Quiz = () => {
    const [questions, setQuestions] = useState([])
    const {courseId, quizId} = useParams()

    useEffect(() => {
        questionsService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    }, [])

    return(
        <div>
           <h2>
               Quiz {quizId}
           </h2>
            <div className="list-group">
                {
                    questions.map((question) => {
                       return(
                           <Question question={question}/>
                       )})
                }
            </div>
        </div>
    )
}

export default Quiz