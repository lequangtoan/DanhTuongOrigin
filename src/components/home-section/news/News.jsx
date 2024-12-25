import "./news.scss";

import React, { useState } from "react";
import HomeSection from "../HomeSection";
import { BgFrame2 } from "../../../assets/videos";
import { Stick } from "../../../assets/images/item/item";
import {
  btnNew,
  xemthemnormal,
} from "./../../../assets/images/button/home_new/home-new";
import { test } from "../../../assets/images";

const News = (props) => {
  const [isTabs, setIsTabs] = useState("tatca");
  const [isBtnHover, setIsBtnHover] = useState(null);

  return (
    <HomeSection
      className={`new ${props.isActive ? "active" : ""}`}
      contentClassName="news__content"
      bgImage={BgFrame2}
    >
      <div className="site__news">
        <div className="site__news__title">
        </div>
        <div className="site__news__center">
          <ul className="site__news__center__tabs">
            {btnNew?.map((btn, id) => (
              <li
                className={`site__news__center__tabs__item ${
                  isTabs === btn?.namebtn ? "new__tabs__item__active" : ""
                } slide-in-right_${id}`}
                key={id}
                onClick={() => setIsTabs(btn?.namebtn)}
              >
                <img
                  src={
                    isTabs === btn?.namebtn
                      ? btn?.active
                      : isBtnHover === btn?.active
                      ? isBtnHover
                      : btn?.normal
                  }
                  alt={`btn-${btn?.namebtn}`}
                  onMouseEnter={() => setIsBtnHover(btn?.active)}
                  onMouseLeave={() => setIsBtnHover(null)}
                />
              </li>
            ))}
          </ul>
          <div className="site__news__center__content">
            <div className="site__news__center__content__bg site-slide-in-bottom_0">
              <img src={test} alt={`image-${test}`} />
            </div>
            <div className="site__news__center__content__list">
              <ul className="site__news__center__content__list__title">
                <li className="site__news__slide__in site-slide-in-bottom_1">
                  <p className="site__news__slide__in__content">
                    <div className="site__news__slide__in__content__dot">
                      <img src={Stick} alt="" />
                    </div>
                    <span className="site__news__slide__in__content__title">
                      Khai mở mái chủ mới thanh phong kiem danh tuong 3q
                    </span>
                  </p>
                  <span className="site__news__slide__in__time">
                    01__01__1111
                  </span>
                </li>

                <li className="site__news__slide__in site-slide-in-bottom_2">
                  <p className="site__news__slide__in__content">
                    <div className="site__news__slide__in__content__dot">
                      <img src={Stick} alt="" />
                    </div>
                    <span className="site__news__slide__in__content__title">
                      Khai mở mái chủ mới thanh phong kiem danh tuong 3q
                    </span>
                  </p>
                  <span className="site__news__slide__in__time">
                    01__01__1111
                  </span>
                </li>

                <li className="site__news__slide__in site-slide-in-bottom_3">
                  <p className="site__news__slide__in__content">
                    <div className="site__news__slide__in__content__dot">
                      <img src={Stick} alt="" />
                    </div>
                    <span className="site__news__slide__in__content__title">
                      Khai mở mái chủ mới thanh phong kiem danh tuong 3q
                    </span>
                  </p>
                  <span className="site__news__slide__in__time">
                    01__01__1111
                  </span>
                </li>

                <li className="site__news__slide__in site-slide-in-bottom_4">
                  <p className="site__news__slide__in__content">
                    <div className="site__news__slide__in__content__dot">
                      <img src={Stick} alt="" />
                    </div>
                    <span className="site__news__slide__in__content__title">
                      Khai mở mái chủ mới thanh phong kiem danh tuong 3q
                    </span>
                  </p>
                  <span className="site__news__slide__in__time">
                    01__01__1111
                  </span>
                </li>
              </ul>
              <div className="site__news__center__content__list__more-link site-slide-in-bottom">
                <img src={xemthemnormal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default News;
