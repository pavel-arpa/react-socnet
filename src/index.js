import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";

export let rerenderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={data.getState()}
                dispatch={data.dispatch.bind(data)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)

store.subscribe(rerenderEntireTree) // переприсваиваем