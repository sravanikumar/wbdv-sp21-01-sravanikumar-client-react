const initialState = {
    quizAttempts: [],
}

const quizAttemptReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_ATTEMPTS_FOR_QUIZ':
            return {
                ...state,
                quizAttempts: action.quizAttempts
            }
        case 'SUBMIT_QUIZ':
            return {
                ...state,
                quizAttempts: [
                    ...state.quizAttempts,
                    action.quizAttempt
                ]
            }
        default:
            return state

    }
}

export default quizAttemptReducer