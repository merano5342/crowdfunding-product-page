import { memo } from 'react'
import style from '../../css/style.module.scss'

const Background = (props) => {
  const { setOpenThanks } = props

  return (
    <div className={style.background} onClick={() => setOpenThanks(false)}>
    </div >
  )

}

export default memo(Background)