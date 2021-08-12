import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(data => (<Dialog id={data.id} name={data.name}/>))
    let messagesElements = props.state.messages[0].history.map(data => (<Message id={data.id} text={data.text}/>))

    return (
        <div className={s.wrapper}>
            <div className={s.dialogsWrapper}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesWrapper}>
                    {messagesElements}
                </div>
                <div className={s.sendMessage}>
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs