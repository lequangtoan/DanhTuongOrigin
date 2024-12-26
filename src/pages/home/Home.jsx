import "./home.scss";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectFade } from "swiper/modules";

import {
  Welcome,
  News,
  Person,
  Comic,
  Feature,
} from "./../../components/home-section";
import { Scrolling } from "../../assets/images/item/item";
import { TamQuocVoSong } from "../../assets/audio";

const swiperOptions = {
  modules: [Pagination, Mousewheel, EffectFade],
  mousewheel: true,
  pagination: true,
  Clickable: true,
  parallax: true,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "vertical",
};

const Home = () => {
  useEffect(() => {
    const welcome = document.querySelectorAll(".welcome");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const slider = document.getElementById("slide");
          if (entry.isIntersecting) {
            slider?.classList?.remove("show");
          } else {
            slider?.classList?.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );
    welcome.forEach((section) => observer.observe(section));
    return () => {
      welcome.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const feature = document.querySelectorAll(".feature");
    const scroll = new IntersectionObserver(
      (entries) => {
        const scroll = document.getElementById("scroll");
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scroll?.classList?.add("hidden");
          } else {
            scroll?.classList?.remove("hidden");
          }
        });
      },
      { threshold: 0.5 }
    );
    feature.forEach((section) => scroll.observe(section));
    return () => {
      feature.forEach((section) => scroll.unobserve(section));
    };
  }, []);

  // const ref = useRef();

  // useEffect(() => {
    // document.getElementById("backgroundMusic").play();
    // ref.current.play();
  // }, []);

  return (
    <>
      {/* <audio  id="backgroundMusic" ref={ref} src={TamQuocVoSong} autoPlay={true} controls muted loop/> */}
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <News isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Person isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Comic isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Feature isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      <div className="scrolled" id="scroll">
        <span>
          <img src={Scrolling} alt="" />
        </span>
      </div>
    </>
  );
};

export default Home;
