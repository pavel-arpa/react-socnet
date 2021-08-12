import s from './Message.module.css'

function Message(props) {
    return (
        <div className={props.id===0 ? s.message_me : s.message}>
            <span>{props.text}</span>
        </div>
    )
}

export default Message