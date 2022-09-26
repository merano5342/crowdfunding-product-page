import { memo } from 'react'

import style from '../css/style.module.scss';
import { ReactComponent as MastercraftLogo } from '../images/logo-mastercraft.svg';

const BriefSection = () => {
  return (
    <section className={style.briefSection}>
      <MastercraftLogo className={style.mLogoIcon} />

      <h2> Mastercraft Bamboo Monitor Riser</h2>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

      <div className={style.btnBox}>
        <button className={style.selectBtn}>
          Back this project
        </button>
        <button className={style.btnBookmark}>
          <p>
            Bookmark
          </p>
        </button>
      </div>
    </section>
  )
}

export default memo(BriefSection)
