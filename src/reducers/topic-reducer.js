const initialState = {
    topics: [
        {title: 'Topic 1', _id: '123'},
        {title: 'Topic 2', _id: '234'},
        {title: 'Topic 3', _id: '345'},
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            const newTopic = {
                title: "New Topic",
                _id: (new Date()).getTime()
            }
            return {
                ...state,
                topics: [
                    ...state.topics,
                    newTopic
                    // action.module
                ]
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    if(topic._id !== action.topicToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if(topic._id === action.updatedTopic._id) {
                        return action.updatedTopic
                    } else {
                        return topic
                    }
                })
            }
        default:
            return state
    }
}

export default topicReducer