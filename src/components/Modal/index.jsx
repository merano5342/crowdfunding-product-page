import { memo, useEffect } from 'react'

import style from './Modal.module.scss'
import { ReactComponent as Close } from '../../images/icon-close-modal.svg'
import Background from './Background'




const Modal = (props) => {
  const {
    state,
    onOpenModal,
    onSelectReward
  } = props

  const { openModal, rewards, selectedReward } = state

  const scrollToTarget = (idName) => {
    const target = document.querySelector(idName);
    if (!target) return
    setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
  }

  const onClickBtn = () => {
    onOpenModal('thanksModal')
  }

  const isNumValidNameate = (num) => {
    const NUMBER_PATTERN = /^[1-9][0-9]*$/
    return NUMBER_PATTERN.test(num)
  }

  useEffect(() => {
    if (openModal === false || !selectedReward) return
    scrollToTarget("#" + selectedReward)
  }, [selectedReward])

  const onClickRadio = (item) => {
    if (item.quality < 1) return
    onSelectReward(item.idName)
  }

  return (
    <>
      <div className={style.modalWrapper}>
        <div className={style.modal}>
          <h2>Back this project</h2>
          <Close className={style.closeBtn} onClick={() => onOpenModal('')} />
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>

          {rewards.map((item) => {
            return (
              <div
                className={style.modalBox}
                id={item.idName}
                key={item.id}
                onClick={() => onClickRadio(item)}
                data-active={item.idName === selectedReward}
                data-available={!!item.quality}
              >
                <div className={style.top}>

                  <input
                    type="radio"
                    id={item.id}
                    name={item.idName}
                    checked={item.idName === selectedReward}
                    onChange={e => { }}
                  />
                  <div className={style.topRight}>
                    <h3 className={style.modalBoxTitle}>{item.title}</h3>

                    {item.minimum ? <h3 className={style.greenText}>Pledge ${item.minimum} or more </h3> : ''}

                  </div>
                </div>
                <p> {item.text} </p>
                <div className={style.bottom}>

                  {item.quality === "unlimited" ?
                    "" : (<div className={style.left}>
                      <h1>{item.quality}</h1>
                      <p>left</p>
                    </div>)}

                </div>
                <div
                  className={style.pledge}
                  data-active={item.idName === selectedReward}>
                  <p>Enter your pledge</p>
                  <div
                    className={style.amount} >
                    <input
                      type="number"
                      placeholder={item.minimum}
                      // value={ }
                      onChange={e => { }} />
                    <button
                      onClick={onClickBtn}
                      defaultChecked={false}
                    >Continue</button>
                  </div>
                </div>
              </div>
            )
          })}


        </div>
      </div>
      <Background onOpenModal={onOpenModal} />

    </>
  )
}

export default memo(Modal) 