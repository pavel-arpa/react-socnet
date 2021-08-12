import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./sidebar/Friend/Friend";

function Nav(props) {
    let topFriendsElements = props.state.topFriends.map(el => {
        return (
            <Friend name={el.name} id={el.id}/>
        )
    })

    return (
        <nav className={s.wrapper}>
            <div className={s["buttons-wrapper"]}>
                <NavLink exact to='/profile' className={s.button} activeClassName={s.button_active}>
                    <span>Profile</span>
                </NavLink>
                <NavLink to='/dialogs' className={s.button} activeClassName={s.button_active}>
                    <span>Dialogs</span>
                </NavLink>
                <NavLink to='/settings' className={s.button} activeClassName={s.button_active}>
                    <span>Settings</span>
                </NavLink>
            </div>

            <div className={s.topFriends}>
                <span className={s.friendsTitle}>Top Friends</span>
                <div className={s.friendsWrapper}>
                    {topFriendsElements}
                </div>
            </div>
        </nav>

    );
}

export default Nav