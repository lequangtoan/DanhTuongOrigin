import "./navbar.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CongDong, Discord, FB, IconGame, Tiktok, Youtube } from "../../assets/images/info/info";
import {
  btn_napthe,
  btn_taigame,
  MenuOption,
} from "../../assets/images/button/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setOpenAvatarDropdown(false);
  };
  const toggleDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown);
  };

  return (
    <div className="container">
      <div className="navbar">
        <img className="navbar__logo" src={IconGame} alt="Logo-img" />
        <div className="navbar__btn">
          <a href="##" className="slide-btn btn1">
            <img src={btn_napthe} alt="napthe" />
          </a>
          <a href="##" className="slide-btn btn2">
            <img src={btn_taigame} alt="taigame" />
          </a>
        </div>
        <div className={`navbar__menu ${open ? "menu__active" : ""}`}>
          <ul className="navbar__menu__item">
            <NavLink to="/">
              <li>Trang chủ</li>
            </NavLink>
            <NavLink to="/news">
              <li>Tin tức</li>
            </NavLink>
            <NavLink to="/cardcap">
              <li>Nạp thẻ</li>
            </NavLink>
            <NavLink to="/manual">
              <li>Cẩm nang</li>
            </NavLink>
            <a className="pc">
              <li className="dropdown">
                Cộng đồng
                <div className="dropdown-content">
                  <a href="https://www.facebook.com/" target="_blank">
                    Fanpage
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    Facebook
                  </a>
                  <a href="https://www.tiktok.com/en" target="_blank">
                    Tiktok
                  </a>
                  <a href="https://discord.com/" target="_blank">
                    Discord
                  </a>
                  <a href="https://www.youtube.com/" target="_blank">
                    Youtube
                  </a>
                </div>
              </li>
            </a>
            <div className="mobile">
              <li className="dropdown" onClick={toggleDropdown}>
                Cộng đồng
              </li>
              <ul
                className={`dropdown-content ${
                  openAvatarDropdown ? "block" : "hidden"
                }`}
              >
                <a href="https://www.facebook.com/" target="_blank">
                  <li>Fanpage</li>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <li>Facebook</li>
                </a>
                <a href="https://www.tiktok.com/en" target="_blank">
                  <li>Tiktok</li>
                </a>
                <a href="https://discord.com/" target="_blank">
                  <li>Discord</li>
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <li>Youtube</li>
                </a>
              </ul>
            </div>
            <NavLink to="/library">
              <li>Thư viện</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar__icons" onClick={handleClick}>
          <img src={MenuOption} alt="Menu-Option" />
        </div>
        <div className="navbar__ground">
          <a href="##" className="slide-btn__ground">
            <img src={CongDong} alt="napthe" />
          </a>
          <a href="##" className="slide-btn__ground">
            <img src={FB} alt="napthe" />
          </a>
          <a href="##" className="slide-btn__ground">
            <img src={Tiktok} alt="napthe" />
          </a>          <a href="##" className="slide-btn__ground">
            <img src={Discord} alt="napthe" />
          </a>          <a href="##" className="slide-btn__ground">
            <img src={Youtube} alt="napthe" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
