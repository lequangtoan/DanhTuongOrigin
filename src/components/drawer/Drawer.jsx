import React from "react";

import "./drawer.scss";
import { AppStore, ButtonNapThe, CHPlay, CongDong, FB, GiaLapPCButton, IconGame } from "../../assets/images/info/info";

const Drawer = () => {
  return (
    <div className="slide" id="slide">
      {/* <img className="slide-btn" src="" alt="close" /> */}
      <div className="slide-content">
        <a href="##" className="slide-content-btn">
          <img src={IconGame} alt="ios" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={AppStore} alt="ios" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={CHPlay} alt="google" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={GiaLapPCButton} alt="voucherCenter" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={ButtonNapThe} alt="voucherCenter" />
        </a>
        <div className="slide-content-ground">
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={CongDong} alt="voucherCenter" />
          </a>
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={FB} alt="voucherCenter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
