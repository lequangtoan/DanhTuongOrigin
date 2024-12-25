import "./feature.scss";

import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import HomeSection from "../HomeSection";
import { BgFrame4 } from "../../../assets/videos";
import { homeFeature } from "./../../../assets/images/feature/feature";

const Feature = (props) => {
  const [data] = useState(homeFeature);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [activeKey, setActiveKey] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [hoverKey, setHoverKey] = useState(null);

  const startNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveKey((prevKey) => Math.floor((prevKey + 1) % data.length));
    }, 30000000);
  };

  const handleNext = (index) => {
    setActiveKey(index);
    startNext();
  };

  useEffect(() => {
    startNext();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data.length]);

  useEffect(() => {
    const resizeHandler = debounce(() => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setSize({ width: clientWidth, height: clientHeight });
      }
    }, 2000000);

    const runResizeHandler = () => {
      requestAnimationFrame(resizeHandler);
    };

    runResizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <HomeSection
      className={`feature ${props.isActive ? "active" : ""}`}
      contentClassName="feature__content"
      bgImage={BgFrame4}
    >
      <div className="site__feature">
        <div className="site__feature__title"></div>

        <div className="site__feature__wrapper" ref={containerRef}>
          <div className="site__feature__wrapper__content">
            <ul className="site__feature__wrapper__content__web">
              {data?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleNext(index)}
                  className={`site-slide-in-bottom_${index}`}
                >
                  <img
                    src={
                      activeKey === index
                        ? item?.tagActive
                        : hoverKey === item?.tagActive
                        ? hoverKey
                        : item?.tag
                    }
                    className="site__feature__wrapper__content__tag"
                    alt={`tag-${index}`}
                    onMouseEnter={() => setHoverKey(item?.tagActive)}
                    onMouseLeave={() => setHoverKey(null)}
                  />
                  <img
                    src={item?.feature}
                    className={`${
                      activeKey === index
                        ? "site__feature__wrapper__content__expansion-active"
                        : "site__feature__wrapper__content__expansion"
                    }`}
                    alt={`feature-${index}`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <ul className="site__feature__wrapper__content__mobile">
            {data?.map((item, index) => (
              <li
                key={index}
                onClick={() => handleNext(index)}
                className={`site-slide-in-bottom_${index}`}
              >
                <img
                  src={
                    activeKey === index
                      ? item?.tagMobileActive
                      : hoverKey === item?.tagMobileActive
                      ? hoverKey
                      : item?.tagMobile
                    // item?.tagMobile
                  }
                  className="site__feature__wrapper__content__tag"
                  alt={`tag-${index}`}
                  onMouseEnter={() => setHoverKey(item?.tagMobileActive)}
                  onMouseLeave={() => setHoverKey(null)}
                />
                <img
                  src={item?.feature}
                  className={`${
                    activeKey === index
                      ? "site__feature__wrapper__content__expansion-active"
                      : "site__feature__wrapper__content__expansion"
                  }`}
                  alt={`feature-${index}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HomeSection>
  );
};

export default Feature;
