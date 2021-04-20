const initialState = {
    quizzes: [],
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_ALL_QUIZZES':
            return {
                ...state,
                quizzes: action.quizzes
            }
        case 'FIND_QUIZ_BY_ID':
            return {
                ...state.quizzes.map(quiz => {
                        if (quiz._id === action.quiz._id) {
                            return action.quiz
                        }
                    }
                )
            }
        default:
            return state

    }
}

export default quizReducer