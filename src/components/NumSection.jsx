import React, { memo } from 'react'

import style from '../css/style.module.scss';
import { useStateContext } from './hooks/useContext'


const NumSection = () => {
  const {
    state
  } = useStateContext()
  const { totalBacked, totalBackers, daysLeft } = state

  return (
    <section className={style.numSection}>
      <div className={style.numContainer}>
        <div className={style.numBox}>
          <h1>$ {totalBacked}</h1>
          <p>of $100,000 backed</p>
        </div>
        <div className={style.numBoxMiddle}>
          <h1>{totalBackers}</h1>
          <p>total backers</p>
        </div>
        <div className={style.numBox}>
          <h1>{daysLeft}</h1>
          <p>days left</p>
        </div>
      </div>

      <div className={style.processBar}>
      </div>
    </section>
  )
}

export default memo(NumSection)
