import "./navbar.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconGame } from "../../assets/images/info/info";
import { btn_napthe, btn_taigame, Discord, Fanpage, Group, MenuOption } from "../../assets/images/button/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log(open);

  return (
    <div className="container">
      <div className="navbar">
        <img className="navbar__logo" src={IconGame} alt="Logo-img" />
        <div className="navbar__btn">
        <a href="##" className="slide-btn">
          <img src={btn_napthe} alt="napthe" />
        </a>
        <a href="##" className="slide-btn">
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
            <NavLink to="/community">
              <li>Cộng đồng</li>
            </NavLink>
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
          <img src={Fanpage} alt="napthe" />
        </a>
        <a href="##" className="slide-btn__ground">
          <img src={Group} alt="napthe" />
        </a>
        <a href="##" className="slide-btn__ground">
          <img src={Discord} alt="napthe" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
