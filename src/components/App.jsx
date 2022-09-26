import style from '../css/style.module.scss';
import Nav from './Nav'
import BriefSection from './BriefSection';
import NumSection from './NumSection'
import AboutSection from './AboutSection';


const App = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.backgroundImg} />
      <Nav />

      <div className={style.container}>
        <BriefSection />

        <NumSection />

        <AboutSection />
      </div>

    </div>
  );
};

export default App;
