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

            {/* <select className="select-languages" name="languages" id="languages">
                <option value="en">english</option>
                <option value="ge">german</option>
                <option value="ru">russian</option>
            </select> */}
            <Logo className="logo logo-smaller" />
        </div>
    </footer >;
};

export default Footer;