const QUIZZES_URL = 'http://localhost:3000/api/quizzes';


const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const submitQuiz = (qzid, questions) => {
    return fetch(`${QUIZZES_URL}/${qzid}/attempts`,
        {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(result => console.log(result))
}

const findAttemptsForQuiz = (qzid) => {
    return fetch(`${QUIZZES_URL}/${qzid}/attempts`)
        .then(response => response.json())
}

export default {
    findAllQuizzes, findQuizById, submitQuiz, findAttemptsForQuiz
}
