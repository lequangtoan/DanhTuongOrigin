import "./welcome.scss";
import HomeSection from "../HomeSection";



import { BgFrame1 } from "../../../assets/videos";
import { appstore, chplay, gialappc, icongame, napthe } from "../../../assets/images/info/info";
import { logo } from "../../../assets/images/item/item";
import { welcome } from "../../../assets/images/title/home_title/home_title";

const Welcome = (props) => {
  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="welcome__content"
      bgImage={BgFrame1}
    >
      <div className="welcome__logo">
        <img src={logo} alt="welcome__logo" />
      </div>
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="info__app">
            <a className="info__app__icon" href="##">
              <img src={icongame} alt="info__app__icon" />
            </a>

            <div className="info__app__mobile">
              <a className="appstore" href="http://">
                <img src={appstore} alt="info__app__mobile-appstore" />
              </a>
              <a className="appstore" href="http://">
                <img src={chplay} alt="info__app__mobile-google" />
              </a>
            </div>
            <div className="info__app__pc">
              <a className="gialappc" href="http://">
                <img src={gialappc} alt="info__app__mobile-pc" />
              </a>
            </div>
            <div className="info__app__pay">
              <a className="napthe" href="http://">
                <img src={napthe} alt="info__app__pay" />
              </a>
            </div>
          </div>
        </div>
      </div>
        <img className="welcome__title" src={welcome} alt="welcome__title" />
    </HomeSection>
  );
};

export default Welcome;