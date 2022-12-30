import React, { memo } from 'react'

import style from '../../css/style.module.scss';
import { useStateContext } from '../hooks/useContext'

const Reward = (props) => {
  const { item, onClick } = props;

  if (item.id !== 1) {
    return (
      <div
        key={item.id}
        className={style.aboutBox}
        data-available={!!item.quality}>
        <div className={style.top}>
          <h3>{item.title}</h3>
          {item.minimum ? <h3 className={style.greenText}>Pledge ${item.minimum} or more </h3> : ''}
        </div>
        <p> {item.text} </p>
        <div className={style.bottom}>
          <div className={style.left}>
            <h1>{item.quality}</h1>
            <p>left</p>
          </div>
          <button
            className={style.selectBtn}
            data-active={!!item.quality}
            onClick={() => onClick(item.idName)}
            disabled={!item.quality}>
            {item.quality ? "Select Reward" : "Out of Stock"}
          </button>
        </div>
      </div>)
  }
}

const AboutSection = () => {
  const {
    state,
    atOpenModal,
    atSelectReward } = useStateContext()

  const { rewards } = state

  const atClick = (idName) => {
    atOpenModal('selectionModal')
    atSelectReward(idName)
  }


  return (
    <section className={style.aboutSection}>
      <div className={style.aboutText}>
        <h2>About this project</h2>
        <p>  The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          <br />
          <br />
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
          to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>

      {rewards.map((item) => {
        return <Reward item={item} key={item.id} onClick={atClick} />
      })}

    </section>
  )
}

export default memo(AboutSection)
