let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'New empty post', likesCount: 10},
            {id: 2, text: 'I was registered', likesCount: 145},
        ]
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
                id: 1, history: [
                    {id: 1, text: 'Hello'},
                    {id: 1, text: 'How are you?'},
                    {id: 0, text: 'Hi'},
                    {id: 0, text: "I'm fine"},
                    {id: 1, text: 'Excellent!'},
                ]
            },
        ],
    },
    sidebar: {
        topFriends: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Fedor'},
            {id: 8, name: 'Elena'}
        ]
    }
}

export default state