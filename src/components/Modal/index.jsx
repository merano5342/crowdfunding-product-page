import React, { memo, useEffect, useState } from 'react'

import style from './Modal.module.scss'
import { ReactComponent as Close } from '../../images/icon-close-modal.svg'
import Background from './Background'
import { useStateContext } from '../hooks/useContext'
import { isNumValidate } from '../tools/isNumValidate'



const Modal = () => {
  const {
    state,
    atOpenModal,
    atSelectReward,
    atSuccessBack,
    atUpdateQuantity
  } = useStateContext()

  const { openModal, rewards, selectedReward } = state
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const scrollToTarget = (idName) => {
    const target = document.querySelector(idName);
    if (!target) return
    setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
  }

  const onSendOut = (item) => {

    if (inputValue < item.minimum || inputValue.length < 1) {
      setError(`please type in $${item.minimum} or more`)
    }
    else {
      atOpenModal('thanksModal')
      atSuccessBack(inputValue)
      atUpdateQuantity(item.id)
    }
  }


  const inputHandler = (e) => {
    const input = e.target.value
    setInputValue(parseInt(input))
  }


  useEffect(() => {
    if (openModal === false || !selectedReward) return
    scrollToTarget("#" + selectedReward)

    if (!isNumValidate(inputValue) && inputValue.length !== 0) {
      setError(`please type in validate number`)
    } else { setError('') }
  }, [selectedReward, inputValue])

  const onClickRadio = (item) => {
    if (item.quantity < 1) return
    atSelectReward(item.idName)
  }

  return (
    <>
      <div className={style.modalWrapper}>
        <div className={style.modal}>
          <h2>Back this project</h2>
          <Close
            className={style.closeBtn}
            onClick={() => atOpenModal('')} />
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
                data-available={!!item.quantity}
              >
                <div className={style.top}>

                  <input
                    type="radio"
                    id={item.id}
                    name={item.idName}
                    checked={item.idName === selectedReward}
                    onChange={() => onClickRadio(item)}
                  />
                  <div className={style.topRight}>
                    <h3 className={style.modalBoxTitle}>{item.title}</h3>

                    {item.minimum ? <h3 className={style.greenText}>Pledge ${item.minimum} or more </h3> : ''}

                  </div>
                </div>
                <p> {item.text} </p>
                <div className={style.bottom}>

                  {item.quantity === "unlimited" ?
                    "" : (<div className={style.left}>
                      <h1>{item.quantity}</h1>
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
                      onChange={(e) => inputHandler(e)}
                      value={inputValue}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          onSendOut(item)
                        }
                      }}
                      data-error={!!error} />
                    {error && <p className={style.error}>{error}</p>}
                  </div>

                  <button
                    onClick={() => {
                      onSendOut(item)
                    }}
                    defaultChecked={false}
                  >Continue</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Background atOpenModal={atOpenModal} />

    </>
  )
}

export default memo(Modal) 