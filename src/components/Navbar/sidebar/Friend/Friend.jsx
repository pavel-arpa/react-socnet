import s from './Friend.module.css'


function Friend(props) {
    return (
        <div className={s.friend}>
            <img
                src="https://images.unsplash.com/photo-1604026289719-a60fd5374945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80"
                alt=""/>
            <span className={s.name}>{props.name}</span>
            <span className={s.id}>{props.id}</span>
        </div>
    )
}

export default Friend