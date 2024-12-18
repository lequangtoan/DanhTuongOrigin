import "./navbar.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo, MenuClose, MenuOption } from "../../assets/images";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log(open);

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo-img" />
      <div className="navbar__title">
        <h2>Danh Tướng Origin</h2>
      </div>
      <div className={`navbar__menu ${open ? "menu__active" : ""}`}>
        <ul className="navbar__menu__item">
          <li>
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/news">Tin tức</NavLink>
          </li>
          <li>
            <NavLink to="/cardcap">Nạp thẻ</NavLink>
          </li>
          <li>
            <NavLink to="/manual">Cẩm nang</NavLink>
          </li>
          <li>
            <NavLink to="/community">Cộng đồng</NavLink>
          </li>
          <li>
            <NavLink to="/library">Thư viện</NavLink>
          </li>
        </ul>
      </div>
      <div className="cross__icons" onClick={handleClick}>
        <img src={open ? MenuClose : MenuOption} alt="Menu-Option" />
      </div>
    </div>
  );
};

export default Navbar;
