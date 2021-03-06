import Logo from "../Logo/Logo";
import MyText from "../MyText/MyText";
import { useContext } from "react";
import { Context } from "../../context";
import { LanguageContext } from "../../languageContext";
import { languageOptions } from "../../dictionary/dictionary";
import LanguageSelect from "../LanguageSelect/LanguageSelect";


const Footer = () => {
    return <footer className="footer">
        <div className="terms">
            <a href={window.location.pathname} className="terms-link">{<MyText tid="terms" />}</a>
            <a href={window.location.pathname} className="terms-link">{<MyText tid="privacy" />}</a>
            <a href={window.location.pathname} className="terms-link">{<MyText tid="about" />}</a>
        </div>

        <div className="languages">
            <LanguageSelect />
            <Logo className="logo logo-smaller" />
        </div>
    </footer >;
};

export default Footer;