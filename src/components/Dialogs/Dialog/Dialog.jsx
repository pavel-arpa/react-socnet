import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props) {
    let path = '/dialogs/' + props.id
    return (
        <NavLink className={s.dialog} to={path} activeClassName={s.dialog_active}>
            <span>{props.name}</span>
        </NavLink>
    )
}

export default Dialog