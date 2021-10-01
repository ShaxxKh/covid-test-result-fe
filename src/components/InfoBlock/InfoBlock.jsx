import React, { useContext } from "react";
import { Context } from "../../context";
import CardsBlock from "../CardsBlock/CardsBlock";
import Footer from "../Footer/Footer";
import Logo from "./../Logo/Logo";
import MyText from "./../MyText/MyText";

const InfoBlock = () => {
    const { testResult } = useContext(Context);
    return <div className="info-block">
        <Logo className="logo" />
        <h1 className="welcome"><MyText tid="welcome" />, {testResult.firstname} {testResult.lastname}</h1>
        <h2 className="intro"><MyText tid="intro" /></h2>
        <CardsBlock />
        <Footer />
    </div>;
};

export default InfoBlock;