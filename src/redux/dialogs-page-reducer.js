const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const dialogsPageReducer = (action, state) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let msg = {
                id: 0,
                text: state.newMessageText.trim()
            }
            state.messages[0].history.push(msg)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export const addMessage_AC = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageText_AC = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})

export default dialogsPageReducer