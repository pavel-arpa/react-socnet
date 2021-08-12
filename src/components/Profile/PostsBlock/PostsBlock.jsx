import s from './PostsBlock.module.css'
import Post from "./Post/Post";

function PostsBlock(props) {
    let postsElements = props.posts.map(data => (
        <Post id={data.id} likesCount={data.likesCount} text={data.text}/>
    ))

    return (
        <div className={s.wrapper}>
            { postsElements }
        </div>
    );
}

export default PostsBlock