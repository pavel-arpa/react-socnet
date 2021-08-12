import s from './Header.module.css'
import logo from '../../logo.svg'

const Header = () => {
  return (
      <header className={s.header}>
          <div className={s.logo}>
              <img src={logo} alt="logo"/>
          </div>
            <div className={s.links}>
                <a href="#" className={s.link}>Atom.net</a>

            </div>
      </header>
  );
}

export default Header