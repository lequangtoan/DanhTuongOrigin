import "./footer.scss";

import React from "react";
import { footermobile, footerweb } from "../../assets/images/footer/footer";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer_web" src={footerweb} alt="footer_web" />
      <img className="footer_mobile" src={footermobile} alt="footer_mobile" />
    </div>
  );
};

export default Footer;
