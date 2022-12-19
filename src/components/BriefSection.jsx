import { memo, useEffect } from 'react'
import style from '../css/style.module.scss';
import { ReactComponent as MastercraftLogo } from '../images/logo-mastercraft.svg';

const BriefSection = (props) => {
  const {
    state,
    onChangeBookmark,
    onOpenModal,
    onSelectReward } = props


  const { bookmark } = state

  const handleBtn = () => {
    onSelectReward('')
    onOpenModal('selectionModal')
  }


  return (
    <section className={style.briefSection}>
      <MastercraftLogo className={style.mLogoIcon} />

      <h2> Mastercraft Bamboo Monitor Riser</h2>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

      <div className={style.btnBox}>
        <button
          className={style.selectBtn}
          onClick={handleBtn}
          defaultChecked={true}>
          Back this project
        </button>
        <div className={style.btnBookmark}
          onClick={onChangeBookmark} data-active={bookmark}>
          <svg width="56" height="56">
            <g fill="none" >
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <p>
            {bookmark ? "Bookmarked" : "Bookmark"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default memo(BriefSection)
