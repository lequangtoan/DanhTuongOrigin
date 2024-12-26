import React from "react";

import "./drawer.scss";
import { AppStore, ButtonNapThe, CHPlay, CongDong, Discord, FB, GiaLapPCButton, IconGame, Tiktok, Youtube } from "../../assets/images/info/info";

const Drawer = () => {
  return (
    <div className="slide" id="slide">
      <div className="slide-content">
        <a className="slide-content-btn">
          <img src={IconGame} alt="ios" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={AppStore} alt="ios" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={CHPlay} alt="google" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={GiaLapPCButton} alt="GiaLapPC" />
        </a>
        <a href="##" className="slide-content-btn voucherCenter">
          <img src={ButtonNapThe} alt="voucherCenter" />
        </a>
        <div className="slide-content-ground">
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={CongDong} alt="CongDong" />
          </a>
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={FB} alt="facebook" />
          </a>          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={Tiktok} alt="tiktok" />
          </a>
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={Discord} alt="discord" />
          </a>
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={Youtube} alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
