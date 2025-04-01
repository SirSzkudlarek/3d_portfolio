import { Link } from 'react-router-dom';
import { arrow, gem } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <div className="home-info-inner text-center px-5 pt-7 pb-10 md:px-10 md:pt-10 md:pb-10">
      <p className="font-medium sm:text-xl"></p>
      {text}
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  </div>
);

const renderContent = {
  1: (
    <div className="home-info">
      <div className="home-info-inner px-5 md:px-10 !py-5">
        <div className="flex flex-row items-center justify-center gap-1 mx-auto mb-1">
          <img src={gem} className="w-3 h-3 object-contain" />
          <img src={gem} className="w-6 h-6 object-contain" />
          <img src={gem} className="w-3 h-3 object-contain" />
        </div>

        <h1 className="sm:text-xl sm:leading-snug text-center text-white ">
          Cześć, Mam na imię <span className="font-semibold">Damian</span> 👋
          <br />
          Jestem Front-End Developerem z Wrocławia.
        </h1>
      </div>
    </div>
  ),
  2: (
    <InfoBox
      text="Poznaj mnie lepiej i dowiedz się więcej o moim doświadczeniu."
      link="/about"
      btnText="Dowiedz się więcej"
    />
  ),
  3: (
    <InfoBox
      text="W tym miejscu poznasz moje projekty i zobaczyć co potrafię."
      link="/projects"
      btnText="Odwiedź moje portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Spodobała Ci się moje projekty albo chcesz poznać mnie bliżej? Wstarczy tylko kliknąć poniżej."
      link="/contact"
      btnText="Wyślij wiadomość"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
