import { useState } from 'react';
import style from '../css/style.module.scss';
import Nav from './Nav'
import BriefSection from './BriefSection';
import NumSection from './NumSection'
import AboutSection from './AboutSection';
import Modal from './Modal/index';
import ThankYouModal from './ThankYouModal'

const App = () => {

  const [select, setSelect] = useState('')
  const [bookmarked, setBookmarked] = useState(false)

  const [openModal, setOpenModal] = useState(false);
  const [openThanks, setOpenThanks] = useState(false)



  return (
    <div className={style.wrapper}>
      {openModal && <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
        select={select}
        setSelect={setSelect}
        setOpenThanks={setOpenThanks} />}
      {openThanks && <ThankYouModal
        setOpenThanks={setOpenThanks} />}
      <div className={style.backgroundImg} />
      <Nav />

      <div className={style.container}>

        <BriefSection
          setOpenModal={setOpenModal}
          openModal={openModal}
          setSelect={setSelect}
          bookmarked={bookmarked}
          setBookmarked={setBookmarked}
        />

        <NumSection />

        <AboutSection
          setOpenModal={setOpenModal}
          setSelect={setSelect} />


      </div>

    </div>
  );
};

export default App;
