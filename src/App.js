import s from './App.module.css'
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App(props) {
    return (
        <BrowserRouter>
            <div className={s.content}>
                <Header/>
                <Nav state={props.state.sidebar}/>
                <div className={s['content-wrapper']}>
                    <Route path={['/profile']} render={() => {
                        return <Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return <Dialogs
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />
                    }}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
