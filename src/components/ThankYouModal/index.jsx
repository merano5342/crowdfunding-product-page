import React, { memo, useEffect } from 'react'
import style from './ThankYouModal.module.scss'
import CompletedIcon from '../../images/icon-check.svg';
import Background from './Background';
import { useStateContext } from '../hooks/useContext'

const ThankYouModal = () => {
  const {
    state,
    atOpenModal
  } = useStateContext()

  const { openModal } = state


  const scrollToTarget = (id) => {
    const target = document.querySelector(id);
    // if (!target) return
    setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
  }

  useEffect(() => {
    scrollToTarget("#thankYou")
  }, [])

  return (
    <>
      <div className={style.modalWrapper} >

        <div className={style.thankYouBox} id="thankYou">
          <img
            src={CompletedIcon} alt="Completed Icon"
            className={style.icon} />
          <h2>
            Thanks for your support!
          </h2>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.You will get
            an email once our campaign is completed.
          </p>
          <button onClick={() => atOpenModal('')}>Got it!</button>
        </div>
        <Background atOpenModal={atOpenModal} />
      </div>

    </>
  )
}


export default memo(ThankYouModal)