import s from './PostsBlock.module.css'
import Post from "./Post/Post";
import React from "react";

function PostsBlock(props) {
    let postsElements = props.posts.map(data => (
        <Post id={data.id} likesCount={data.likesCount} text={data.text}/>
    ))

    let refAddPost = React.createRef()

    let addPost = () => {
        let text = refAddPost.current.value
        props.addPost(text)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.addPost}>
                <textarea ref={refAddPost} />
                <button onClick={addPost}>add post</button>
            </div>
        <div className={s.postsWrapper}>
            { postsElements }
        </div>

        </div>
    );
}

export default PostsBlock