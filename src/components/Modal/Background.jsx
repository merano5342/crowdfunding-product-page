import { memo } from 'react'
import style from '../../css/style.module.scss'

const Background = (props) => {
  const { setOpenModal } = props

  return (
    <div className={style.background} onClick={() => setOpenModal(false)}>

    </div>
  )

}

export default memo(Background)