import React from "react";
import { hostedDomain } from "./footer-data";
import "./footer.css";

const FooterSection = () => {
  return (
    <div className="footer__wrapper">
      Copyright &#169; {hostedDomain} | All rights reserved
    </div>
  );
};

export default FooterSection;
