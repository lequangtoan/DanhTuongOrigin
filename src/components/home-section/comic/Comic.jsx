import "./comic.scss";

import React, { useState } from "react";
import HomeSection from "../HomeSection";

import { BgFrame3 } from "../../../assets/videos";
import { btnComic } from "./../../../assets/images/button/home_comic/home-comic";
import { CotTruyen } from "../../../assets/images/title/home_title/home_title";

import { test1, test2 } from "../../../assets/images";
import { Char } from "../../../assets/images/item/item";

const Comic = (props) => {
  const [isTabs, setIsTabs] = useState("tonghop");
  const [isBtnHover, setIsBtnHover] = useState(null);

  return (
    <HomeSection
      className={`comic ${props.isActive ? "active" : ""}`}
      contentClassName="comic__content"
      bgImage={BgFrame3}
    >
      <div className="site__planning">
        <div className="site__planning__title"></div>

        <div className="site__planning__center">
          <div className="site__planning__center__content">
            <ul className="site__planning__center__content__tabs site-slide-in-right">
              {btnComic?.map((btn, id) => (
                <li
                  className={`site__planning__center__content__tabs__item ${
                    isTabs === btn?.namebtn
                      ? "lanning____tabs__item__active"
                      : ""
                  }`}
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
            <div
              className="site__planning__center__content__kv site-slide-in-right"
            >
              <img
                className="site__planning__center__content__kv__bg"
                src={test1}
                alt="site__planning__center__content__kv"
              />
            </div>
            <img
              className="site__planning__center__content__title site-slide-in-right"
              src={CotTruyen}
              alt="site__planning__center__content__title"
            />
            <ul className="site__planning__center__content__list">
              <li className="site__planning__center__content__list__chapter site-slide-in-bottom_0">
                <img
                  className="site__planning__center__content__list__chapter__bg"
                  src={test2}
                  alt="introImg"
                />
                <p className="site__planning__center__content__list__chapter__title">
                  001 tieu de
                </p>
              </li>
              <li className="site__planning__center__content__list__chapter site-slide-in-bottom_1">
                <img
                  className="site__planning__center__content__list__chapter__bg"
                  src={test2}
                  alt="introImg"
                />
                <p className="site__planning__center__content__list__chapter__title">
                  002 tieu de
                </p>
              </li>
              <li className="site__planning__center__content__list__chapter site-slide-in-bottom_2">
                <img
                  className="site__planning__center__content__list__chapter__bg"
                  src={test2}
                  alt="introImg"
                />
                <p className="site__planning__center__content__list__chapter__title">
                  003 tieu de
                </p>
              </li>
              <li className="site__planning__center__content__list__chapter site-slide-in-bottom_3">
                <img
                  className="site__planning__center__content__list__chapter__bg"
                  src={test2}
                  alt="introImg"
                />
                <p className="site__planning__center__content__list__chapter__title">
                  004 tieu de
                </p>
              </li>
              <li className="site__planning__center__content__list__chapter site-slide-in-bottom_4">
                <img
                  className="site__planning__center__content__list__chapter__bg"
                  src={test2}
                  alt="introImg"
                />
                <p className="site__planning__center__content__list__chapter__title">
                  005 tieu de
                </p>
              </li>
              <li className="site__planning__center__content__list__chapter site-slide-in-bottom_5">
                <img
                  className="site__planning__center__content__list__chapter__bg"
                  src={test2}
                  alt="introImg"
                />
                <p className="site__planning__center__content__list__chapter__title">
                  006 tieu de
                </p>
              </li>
        </ul>
          </div>
          <div className="site__planning__center__BG">
            <img src={Char} alt="" />
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Comic;
