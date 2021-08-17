import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {addMessage_AC, updateNewMessageText_AC} from "../../redux/state";

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(data => (<Dialog id={data.id} name={data.name}/>))
    let messagesElements = props.state.messages[0].history.map(data => (<Message id={data.id} text={data.text}/>))

    let onSendMessage = () => {
        props.dispatch(addMessage_AC())
    }

    let onChangeNewMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageText_AC(text))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogsWrapper}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesWrapper}>
                    <span className={s.startDialogPhrase}>Begin of your dialog</span>
                    {messagesElements}
                </div>
                <div className={s.sendMessage}>
                    <input
                        type="text"
                        value={props.state.newMessageText}
                        onChange={onChangeNewMessageText}
                        placeholder={'Enter the message'}
                    />
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs