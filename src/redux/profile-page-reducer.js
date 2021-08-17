const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profilePageReducer = (action, state) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                text: state.newPostText.trim(),
                likesCount: 145
            }
            state.posts.push(post)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state

        default:
            return state
    }
}

export const addPost_AC = () => ({
    type: ADD_POST
})
export const updateNewPostText_AC = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profilePageReducer