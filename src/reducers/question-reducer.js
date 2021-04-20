const initialState = {
    questions: [],
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_QUESTIONS_FOR_QUIZ':
            return {
                ...state,
                quizzes: action.quizzes
            }
        default:
            return state

    }
}

export default questionReducer