import s from './PostsBlock.module.css'
import Post from "./Post/Post";
import React from "react";
import {updateNewPostText} from "../../../redux/state";

function PostsBlock(props) {
    let postsElements = props.state.posts.map(data => (
        <Post id={data.id} likesCount={data.likesCount} text={data.text}/>
    ))

    let refAddPost = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let changeNewPostText = () => {
        let text = refAddPost.current.value;
        console.log(text)
        props.updateNewPostText(text)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.addPost}>
                <textarea ref={refAddPost} onChange={changeNewPostText} value={props.state.newPostText}/>
                <button onClick={addPost}>add post</button>
            </div>
        <div className={s.postsWrapper}>
            { postsElements }
        </div>

        </div>
    );
}

export default PostsBlock