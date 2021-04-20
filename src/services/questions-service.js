const QUIZZES_URL = 'http://localhost:3000/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
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

export default {
    findQuestionsForQuiz,
    submitQuiz
}
