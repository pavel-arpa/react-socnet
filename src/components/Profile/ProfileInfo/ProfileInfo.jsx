import s from './ProfileInfo.module.css'
import logo from '../../../logo.svg'

function ProfileInfo() {
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={logo} alt=""/>
            </div>
            <div className={s.description}>
                <span className={s.name}>Pavel Arepev</span>
                <span>a programmer</span>
            </div>
        </div>
    );
}

export default ProfileInfo