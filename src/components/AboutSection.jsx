import { memo } from 'react'

import style from '../css/style.module.scss';


const AboutSection = (props) => {
  const {
    state,
    onOpenModal,
    onSelectReward } = props

  const { rewards } = state

  const atClick = (idName) => {
    onOpenModal('selectionModal')
    onSelectReward(idName)
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
        if (item.id === 1) return
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
                onClick={() => atClick(item.idName)}
                disabled={!!!item.quality}>
                {item.quality ? "Select Reward" : "Out of Stock"}
              </button>
            </div>
          </div>)
      })}

      {/* <div className={style.aboutBox}>
        <div className={style.top}>
          <h3>Bamboo Stand</h3>
          <h3 className={style.greenText}>Pledge $25 or more</h3>
        </div>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list.
        </p>
        <div className={style.bottom}>

          <div className={style.left}>
            <h1>101</h1>
            <p>left</p>
          </div>
          <button className={style.selectBtn} data-active={true} onClick={() => atClick("Bamboo")} >
            Select Reward
          </button>
        </div>
      </div>

      <div className={style.aboutBox}>
        <div className={style.top}>
          <h3>Black Edition Stand</h3>
          <h3 className={style.greenText}>Pledge $75 or more</h3>
        </div>
        <p>
          You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included.
        </p>
        <div className={style.bottom}>
          <div className={style.left}>
            <h1>64</h1>
            <p>left</p>
          </div>
          <button className={style.selectBtn} data-active={true} onClick={() => atClick("BlackEdition")}>
            Select Reward
          </button>
        </div>
      </div>

      <div className={`${style.aboutBox} disabled`}>
        <div className={style.top}>

          <h3>  Mahogany Special Edition</h3>
          <h3 className={style.greenText}>Pledge $200 or more</h3>

        </div>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
          to our Backer member list. Shipping is included.
        </p>
        <div className={style.bottom}>
          <div className={style.left}>
            <h1>0</h1>
            <p>left</p>
          </div>
          <button className={style.selectBtn} data-active='false' >
            Out of Stock
          </button>
        </div>

      </div> */}
    </section>
  )
}

export default memo(AboutSection)
