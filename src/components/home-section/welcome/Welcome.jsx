import "./welcome.scss";

import HomeSection from "../HomeSection";
import { BgFrame1 } from "../../../assets/videos";

import {
  AppStore,
  CHPlay,
  GiaLapPC,
  IconGame,
  NapThe,
} from "../../../assets/images/info/info";

import { welcome } from "../../../assets/images/title/home_title/home_title";

const Welcome = (props) => {
  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="welcome__content"
      bgImage={BgFrame1}
    >
      <div className="welcome__logo hvrIconDown">
        <img src={welcome} alt="title-text" />
      </div>
      <div className="welcome__info site-slide-in-right">
        <div className="welcome__info__content">
          <div className="info__app">
            <a className="info__app__icon" href="##">
              <img src={IconGame} alt="icon" />
            </a>

            <div className="info__app__mobile">
              <a className="appstore" href="http://">
                <img src={AppStore} alt="ios" />
              </a>
              <a className="appstore" href="http://">
                <img src={CHPlay} alt="google" />
              </a>
            </div>
            <div className="info__app__pc">
              <a className="gialappc" href="http://">
                <img src={GiaLapPC} alt="windows" />
              </a>
            </div>
            <div className="info__app__pay">
              <a className="napthe" href="http://">
                <img src={NapThe} alt="card" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
