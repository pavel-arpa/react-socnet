import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlock from "./PostsBlock/PostsBlock";



function Profile(props) {
    return (
        <div>
            <div className={s.cover}>
                <img src="https://img2.goodfon.ru/wallpaper/nbig/7/7f/priroda-panorama-vershina.jpg" alt=""/>
            </div>
            <ProfileInfo/>
            <PostsBlock state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile