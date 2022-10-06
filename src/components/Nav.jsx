import { memo, useState } from 'react'
import style from '../css/style.module.scss';

import { ReactComponent as Logo } from '../images/logo.svg'
import { ReactComponent as Hamburger } from '../images/icon-hamburger.svg';

const Nav = () => {
  const [activeHamburger, setActiveHamburger] = useState(false)

  return (
    <div className={style.nav}>
      <Logo className={style.logoIcon} href="" />
      <Hamburger
        className={style.navItemsClosed}
        onClick={() => setActiveHamburger((pre) => !pre)} />
      <div className={style.navItemsOpen} data-active={activeHamburger}>
        <div className={style.navItem}>
          <a href="">About</a>
        </div>
        <div className={style.navItem}>
          <a href="">Discover</a>
        </div>
        <div className={style.navItem}>
          <a href="">Get Started</a>
        </div>
      </div>
    </div>
  )
}

export default memo(Nav)