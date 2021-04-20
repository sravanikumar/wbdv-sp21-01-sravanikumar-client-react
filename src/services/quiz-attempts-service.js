const QUIZZES_URL = 'https://wbdv-sp21-sravani-server-node.herokuapp.com/api/quizzes';

const submitQuiz = (qzid, questions) => {
    return fetch(`${QUIZZES_URL}/${qzid}/attempts`,
        {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())

}

const findAttemptsForQuiz = (qzid) => {
    return fetch(`${QUIZZES_URL}/${qzid}/attempts`)
        .then(response => response.json())
}

export default {submitQuiz, findAttemptsForQuiz}