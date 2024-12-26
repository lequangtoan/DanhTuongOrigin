import "./footer.scss";

import React from "react";
import { redfoxlogo } from "../../assets/images/item/item";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="logo__redfox" src={redfoxlogo} alt="logo-redfox" />
        <p>
          Danh Tướng Origin - Siêu phẩm game mobile đề tài Tam Quốc đồ hoạ hoạt
          hình hot nhất 2024
        </p>
        <p>Phúc lợi chào mừng ngập tràn, miễn phí hoàn toàn. </p>
        <p>Bản quyền thuộc Công ty TNHH Truyền Thông Redfox Network</p>
      </div>
    </div>
  );
};

export default Footer;
