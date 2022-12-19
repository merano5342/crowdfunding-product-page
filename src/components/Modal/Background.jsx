import { memo } from 'react'
import style from '../../css/style.module.scss'

const Background = (props) => {
  const { onOpenModal } = props

  return (
    <div className={style.background} onClick={() => onOpenModal('')}>

    </div>
  )

}

export default memo(Background)