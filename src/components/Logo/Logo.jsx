import React from "react";
import logo from "./../../assets/images/logo.png";
import poweredByLogo from "./../../assets/images/poweredby.png";

const Logo = ({ className }) => {
    if (className.includes("logo-smaller")) {
        return <div className={className}>
            <img className="logo-img" src={poweredByLogo} alt="powered by logo" />
        </div>;
    } else {
        return <div className={className}>
            <img className="logo-img" src={logo} alt="powered by logo" />
        </div>;
    }

};

export default Logo;