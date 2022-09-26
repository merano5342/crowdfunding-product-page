import { memo } from 'react'

import style from '../css/style.module.scss';


const NumSection = () => {
  return (
    <section className={style.numSection}>
      <div className={style.numContainer}>
        <div className={style.numBox}>
          <h1>$89,914</h1>
          <p>of $100,000 backed</p>
        </div>
        <div className={style.numBoxMiddle}>
          <h1>5,007</h1>
          <p>total backers</p>
        </div>
        <div className={style.numBox}>
          <h1>56</h1>
          <p>days left</p>
        </div>
      </div>

      <div className={style.processBar}>
      </div>
    </section>
  )
}

export default memo(NumSection)
