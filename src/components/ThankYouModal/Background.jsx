import React, { memo } from 'react'
import style from '../../css/style.module.scss'

const Background = (props) => {
  const { atOpenModal } = props

  return (
    <div className={style.background} onClick={() => atOpenModal('')}>
    </div >
  )

}

export default memo(Background)