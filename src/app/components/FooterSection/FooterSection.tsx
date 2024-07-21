import React from "react";
import { hostedDomain } from "./footer-data";
import "./footer.css";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer__wrapper">
      Copyright &#169; {currentYear} {hostedDomain} | All rights reserved
    </div>
  );
};

export default FooterSection;
