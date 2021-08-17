// CONSTANTS

const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

// ===========

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'New empty post', likesCount: 10},
                {id: 2, text: 'I was registered', likesCount: 145},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Fedor'},
                {id: 4, name: 'Andrew'},
                {id: 5, name: 'Igor'},
                {id: 6, name: 'John'},
                {id: 7, name: 'Anna'},
                {id: 8, name: 'Elena'},
            ],
            messages: [
                {
                    id: 1,
                    history: [
                        {id: 1, text: 'Hello'},
                        {id: 1, text: 'How are you?'},
                        {id: 0, text: 'Hi'},
                        {id: 0, text: "I'm fine"},
                        {id: 1, text: 'Excellent!'},
                    ]
                },
            ],
            newMessageText: ''
        },
        sidebar: {
            topFriends: [
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Fedor'},
                {id: 8, name: 'Elena'}
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let post = {
                id: 3,
                text: this._state.profilePage.newPostText,
                likesCount: 145
            }
            this._state.profilePage.posts.push(post)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this)
        }

        else if (action.type === ADD_MESSAGE) {
            let msg = {
                id: 0,
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages[0].history.push(msg)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this)
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this)
        }

        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscriber(this)
        }

    }
}

export const addPost_AC = () => ({
    type: ADD_POST
})
export const addMessage_AC = () => ({
    type: ADD_MESSAGE
})
export const updateNewPostText_AC = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})
export const updateNewMessageText_AC = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})

window.store = store

export default store