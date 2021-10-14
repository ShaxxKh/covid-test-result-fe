import React from "react";
import InfoBlock from "../InfoBlock/InfoBlock";
import mainImg from "./../../assets/images/bg.png";

const MainSection = () => {
    return <section className="main-section">
        <InfoBlock />
        <img className="main-img" src={mainImg} alt="main" />
    </section>;
};

export default MainSection;