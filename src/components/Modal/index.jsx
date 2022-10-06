import { memo, useEffect } from 'react'

import style from './Modal.module.scss'
import { ReactComponent as Close } from '../../images/icon-close-modal.svg'
import Background from './Background'

const projectData = [
  {
    id: 'noReward',
    title: 'Pledge with no reward',
    minimum: 0,
    text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    quality: '',
  },
  {
    id: 'Bamboo',
    title: 'Bamboo Stand',
    minimum: 25,
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    quality: 101,
  },
  {
    id: 'BlackEdition',
    title: 'Black Edition Stand',
    minimum: 75,
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quality: 64,
  },
  {
    id: 'MahoganySpecial',
    title: 'Mahogany Special Edition',
    minimum: 200,
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quality: "0",
  }

]

const Modal = (props) => {
  const { setOpenModal, openModal, select, setSelect, setOpenThanks } = props

  const scrollToTarget = (id) => {
    const target = document.querySelector(id);
    if (!target) return
    setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
  }

//   const handleChange = (e)=> {
// const target = e.target
// if (target.checked) {
//   setOpenThanks()
// }
  // }
  useEffect(() => {
    if (openModal === false || !select) return
    scrollToTarget("#" + select)
    console.log(select)
  }, [select])


  return (
    <>
      <div className={style.modalWrapper}>
        <div className={style.modal}>
          <h2>Back this project</h2>
          <Close className={style.closeBtn} onClick={() => setOpenModal(false)} />
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>

          {projectData.map((item) => {
            return (
              <div
                className={style.modalBox}
                id={item.id}
                key={item.id}
                onClick={() => setSelect(item.id)} data-active={item.id === select}>
                <div className={style.top}>
                  <input
                    type="radio"
                    id={item.id}
                    name={item.id}
                    checked={item.id === select}
                  />
                  <div className={style.topRight}>
                    <h3>{item.title}</h3>

                    {item.minimum ? <h3 className={style.greenText}>Pledge ${item.minimum} or more </h3> : ''}

                  </div>
                </div>
                <p> {item.text} </p>
                <div className={style.bottom}>

                  {
                    item.quality ? (<div className={style.left}>
                      <h1>{item.quality}</h1>
                      <p>left</p>
                    </div>) : ''
                  }

                </div>
                <div
                  className={style.pledge}
                  data-active={item.id === select}>
                  <p>Enter your pledge</p>
                  <div
                    className={style.amount} >
                    <input
                      type="number"
                      placeholder="0" />
                    <button
                      onClick={() => {
                        setOpenModal(false)
                        setOpenThanks(true)
                      }}
                      defaultChecked={false}
                    >Continue</button>
                  </div>
                </div>
              </div>
            )
          })}


        </div>
      </div>
      <Background setOpenModal={setOpenModal} />

    </>
  )
}

export default memo(Modal) 