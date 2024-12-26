import "./person.scss";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import HomeSection from "../HomeSection";
import { BgFrame3 } from "../../../assets/videos";
import {
  contry,
  homePerson,
} from "./../../../assets/images/person/home-person";
import { ArrowLeft, ArrowRight } from "../../../assets/images/button/button";

const Person = (props) => {
  const [datacontry] = useState(contry);
  const [datahomePerson] = useState(homePerson);

  const [isContry, setIsContry] = useState("nguy");
  const [isPerson, setIsPerson] = useState("chunghoi");

  const [swiper, updateSwiper] = useState(null);

  const swiperPerson = {
    modules: [Navigation, Thumbs],
    loop: true,
    rewind: true,
    speed: 600,
    grabCursor: true,
    navigation: true,
  };

  console.log(swiper);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HomeSection
      className={`person ${props.isActive ? "active" : ""}`}
      contentClassName="person__content"
      bgImage={BgFrame3}
    >
      <div className="site__person">
        <div className="site__person__title"></div>
        <div className="site__person__title__bg"></div>
        <div className="site__person__center">
          <div className="site__person__center__battle">
            <div className="site__person__center__battle__tab site-slide-in-right">
              {datacontry?.map((contry, index) => (
                <div
                  className="site__person__center__battle__tab__wrapper"
                  onClick={() => setIsContry(contry?.contryname)}
                >
                  <img
                    src={
                      isContry === contry?.contryname
                        ? contry?.active
                        : contry?.normal
                    }
                    alt="tab"
                    className="site__person__center__battle__tab__wrapper__item"
                  />
                  <div
                    className={`site__person__center__battle__tab__swiper ${
                      isContry === contry?.contryname
                        ? "site__person__center__active"
                        : ""
                    }`}
                  >
                    <div className="site__person__center__battle__swiper__wrapper">
                      <div className="site__person__center__battle__swiper__item">
                        {datahomePerson
                          .filter(
                            (datahomePerson) =>
                              datahomePerson?.contry === isContry
                          )
                          .map((dataperson, index) => (
                            <div
                              className={`swiper__slide swiper__slide__show ${
                                isPerson === dataperson?.nickName
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() => setIsPerson(dataperson?.nickName)}
                            >
                              <img
                                src={
                                  isPerson === dataperson?.nickName
                                    ? dataperson?.iconactive
                                    : dataperson?.iconnormal
                                }
                                alt={`avatar-${index}`}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="site__person__center__item">
            {datahomePerson
              .filter((datahomePerson) => datahomePerson?.nickName === isPerson)
              .map((cvperson, id) => (
                <div className="site__person__center__item__CV">
                  <div className="site__person__center__item__CV__bg  site-slide-in-right">
                    <img
                      className="site__person__center__item__CV__bg__img"
                      src={cvperson?.bgLarge}
                      alt={`avatar-${id}`}
                    />
                  </div>
                  <div className="site__person__center__item__CV__description">
                    <div className="site__person__center__item__CV__description__cv slide-in-right_0">
                      <img
                        className="site__person__center__item__CV__description__cv__name"
                        src={cvperson?.name}
                        alt={`name-${id}`}
                      />
                    </div>
                    <div className="site__person__center__item__CV__description__introduction slide-in-right_1">
                      <p>{cvperson?.description}</p>
                    </div>

                    <div className="site__person__center__item__CV__description__skill slide-in-right_2">
                      <img
                        src={cvperson?.skill.skill1}
                        alt={`skill-${cvperson?.skill.skill1}`}
                      />
                      <img
                        src={cvperson?.skill.skill2}
                        alt={`skill-${cvperson?.skill.skill2}`}
                      />
                      <img
                        src={cvperson?.skill.skill3}
                        alt={`skill-${cvperson?.skill.skill3}`}
                      />
                      <img
                        src={cvperson?.skill.skill4}
                        alt={`skill-${cvperson?.skill.skill4}`}
                      />
                    </div>
                    <div>
                      <iframe
                        className="site__person__center__item__CV__description__video slide-in-right_3"
                        src="https://resource.lingxigames.com/ds_resource/video/2625/187MWLY2DE9o.mp4"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="site__person__center__item-mobile">
            <Swiper {...swiperPerson}>
              {datahomePerson
                .filter((datahomePerson) => datahomePerson?.contry === isContry)
                .map((cvperson, id) => (
                  <SwiperSlide>
                    <div className="site__person__center__item__CV">
                      <div className="site__person__center__item__CV__bg  site-slide-in-right">
                        <img
                          className="site__person__center__item__CV__bg__img"
                          src={cvperson?.bgLarge}
                          alt={`avatar-${id}`}
                        />
                      </div>
                      <div className="site__person__center__item__CV__description">
                        <div className="site__person__center__item__CV__description__cv slide-in-right_0">
                          <img
                            className="site__person__center__item__CV__description__cv__name"
                            src={cvperson?.name}
                            alt={`name-${id}`}
                          />
                        </div>
                        <div className="site__person__center__item__CV__description__introduction slide-in-right_1">
                          <p>{cvperson?.description}</p>
                        </div>

                        <div className="site__person__center__item__CV__description__skill slide-in-right_2">
                          <img
                            src={cvperson?.skill.skill1}
                            alt={`skill-${cvperson?.skill.skill1}`}
                          />
                          <img
                            src={cvperson?.skill.skill2}
                            alt={`skill-${cvperson?.skill.skill2}`}
                          />
                          <img
                            src={cvperson?.skill.skill3}
                            alt={`skill-${cvperson?.skill.skill3}`}
                          />
                          <img
                            src={cvperson?.skill.skill4}
                            alt={`skill-${cvperson?.skill.skill4}`}
                          />
                        </div>
                        <div>
                          <iframe
                            className="site__person__center__item__CV__description__video slide-in-right_3"
                            src="https://resource.lingxigames.com/ds_resource/video/2625/187MWLY2DE9o.mp4"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Person;
