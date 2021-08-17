import s from './PostsBlock.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPost_AC, updateNewPostText_AC} from "../../../redux/profile-page-reducer";

function PostsBlock(props) {
    let postsElements = props.state.posts.map(data => {
        if (data.text !== '') {
            return (<Post id={data.id} likesCount={data.likesCount} text={data.text}/>)
        }
    })

    let addPost = () => {
        props.dispatch(addPost_AC())
    }

    let changeNewPostText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostText_AC(text))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.addPost}>
                <input
                    onChange={changeNewPostText}
                    value={props.state.newPostText}
                    placeholder={'Enter the text here'}
                />
                <button onClick={addPost}>add post</button>
            </div>
            <div className={s.postsWrapper}>
                {postsElements}
            </div>

        </div>
    );
}

export default PostsBlock