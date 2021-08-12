import s from './Post.module.css'
import logo from '../../../../logo.svg'

function Post(props) {
    return (
        <div className={s.wrapper}>
            <img src={logo} alt="" className={s.avatar}/>
            <div className={s.text}>
                {props.text}
            </div>
            <span>{props.likesCount}</span>
        </div>
    );
}

export default Post