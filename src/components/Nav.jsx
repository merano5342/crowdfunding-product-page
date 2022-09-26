import { memo } from 'react'
import style from '../css/style.module.scss';

import { ReactComponent as Logo } from '../images/logo.svg'
import { ReactComponent as Hamburger } from '../images/icon-hamburger.svg';

const Nav = () => {
  return (
    <div className={style.nav}>
      <Logo className={style.logoIcon} />
      <Hamburger className={style.navItemsClosed} />
      <div className={style.navItemsOpen}>
        <div className={style.navItem}>
          About
        </div>
        <div className={style.navItem}>
          Discover
        </div>
        <div className={style.navItem}>
          Get Started
        </div>
      </div>
    </div>
  )
}

export default memo(Nav)