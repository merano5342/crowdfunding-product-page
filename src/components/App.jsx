import React, { useCallback } from 'react';
import style from '../css/style.module.scss';
import Nav from './Nav'
import BriefSection from './BriefSection';
import NumSection from './NumSection'
import AboutSection from './AboutSection';
import Modal from './Modal';
import ThankYouModal from './ThankYouModal'

import useBack from './hooks/useBack'
import { StateContext } from './hooks/useContext'
import { actionChangeBookmark, actionOpenModal, actionSelectReward, actionSuccessBack, actionUpdateQuantity } from './hooks/action';

const App = () => {
  const [state, dispatch] = useBack()
  const { openModal } = state

  const atChangeBookmark = useCallback(() => {
    dispatch(actionChangeBookmark())
  }, [dispatch])

  const atOpenModal = useCallback((modal) => {
    dispatch(actionOpenModal(modal))
  }, [dispatch])

  const atSelectReward = useCallback((reward) => {
    dispatch(actionSelectReward(reward))
  }, [dispatch])

  const atSuccessBack = useCallback((userBacked) => {
    dispatch(actionSuccessBack(userBacked))
  }, [dispatch])

  const atUpdateQuantity = useCallback((itemIdName) => {
    dispatch(actionUpdateQuantity(itemIdName))
  }, [dispatch])



  const providerValue = {
    state,
    atOpenModal,
    atSelectReward,
    atChangeBookmark,
    atSuccessBack,
    atUpdateQuantity
  }

  return (
    <div className={style.wrapper}>
      <StateContext.Provider value={providerValue}>

        {(openModal === 'selectionModal') && <Modal />}
        {(openModal === 'thanksModal') && <ThankYouModal />}
        <div className={style.backgroundImg} />
        <Nav />
        <div className={style.container}>
          <BriefSection />
          <NumSection />
          <AboutSection />
        </div>
      </StateContext.Provider>

    </div>
  );
};

export default App;
