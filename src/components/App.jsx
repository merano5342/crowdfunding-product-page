import { useCallback, useState } from 'react';
import style from '../css/style.module.scss';
import Nav from './Nav'
import BriefSection from './BriefSection';
import NumSection from './NumSection'
import AboutSection from './AboutSection';
import Modal from './Modal/index';
import ThankYouModal from './ThankYouModal'

import useBack from './hooks/useBack'
import { actionChangeBookmark, actionOpenModal, actionSelectReward } from './hooks/action';

const App = () => {

  const [state, dispatch] = useBack()

  const { openModal } = state

  // const [select, setSelect] = useState('')




  const atChangeBookmark = useCallback(() => {
    dispatch(actionChangeBookmark())
  }, [dispatch])

  const atOpenModal = useCallback((modal) => {
    dispatch(actionOpenModal(modal))
  }, [dispatch])

  const atSelectReward = useCallback((reward) => {
    dispatch(actionSelectReward(reward))
  }, [dispatch])

  // const modalControl = ()=> {
  //   if  {

  //   }
  // }

  return (
    <div className={style.wrapper}>
      {(openModal === 'selectionModal') && <Modal
        state={state}
        onOpenModal={atOpenModal}
        onSelectReward={atSelectReward}
      />}
      {(openModal === 'thanksModal') && <ThankYouModal
        state={state}
        onOpenModal={atOpenModal} />}
      <div className={style.backgroundImg} />
      <Nav />

      <div className={style.container}>

        <BriefSection
          state={state}
          onChangeBookmark={atChangeBookmark}
          onOpenModal={atOpenModal}
          onSelectReward={atSelectReward}

        />

        <NumSection />

        <AboutSection
          state={state}
          onOpenModal={atOpenModal}
          onSelectReward={atSelectReward} />


      </div>

    </div>
  );
};

export default App;
