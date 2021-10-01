import React from "react";
import InfoBlock from "../InfoBlock/InfoBlock";
import mainImg from "./../../assets/images/tree.jpeg";

const MainSection = () => {
    return <section className="main-section">
        <InfoBlock />
        <img src={mainImg} alt="main" />
    </section>;
};

export default MainSection;