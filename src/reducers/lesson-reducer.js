const initialState = {
    lessons: [
        {title: 'Lesson 1', _id: '123'},
        {title: 'Lesson 2', _id: '234'},
        {title: 'Lesson 3', _id: '345'},
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            const newLesson = {
                title: "New Lesson",
                _id: (new Date()).getTime()
            }
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    newLesson
                    // action.module
                ]
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id !== action.lessonToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if(lesson._id === action.updatedLesson._id) {
                        return action.updatedLesson
                    } else {
                        return lesson
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer