import s from './Profile.module.css'
import logo from '../../logo.svg'
import Post from "./PostsBlock/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlock from "./PostsBlock/PostsBlock";



function Profile(props) {
    return (
        <div>
            <div className={s.cover}>
                <img src="https://img2.goodfon.ru/wallpaper/nbig/7/7f/priroda-panorama-vershina.jpg" alt=""/>
            </div>
            <ProfileInfo/>
            <PostsBlock posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile