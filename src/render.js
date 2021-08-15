import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, updateNewPostText} from './redux/state'


export let rerenderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={data.state} addPost={data.addPost} updateNewPostText={data.updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}