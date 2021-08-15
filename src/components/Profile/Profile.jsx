import s from './Profile.module.css'
import logo from '../../logo.svg'
import Post from "./PostsBlock/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlock from "./PostsBlock/PostsBlock";
import {updateNewPostText} from "../../redux/state";



function Profile(props) {
    return (
        <div>
            <div className={s.cover}>
                <img src="https://img2.goodfon.ru/wallpaper/nbig/7/7f/priroda-panorama-vershina.jpg" alt=""/>
            </div>
            <ProfileInfo/>
            <PostsBlock state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile