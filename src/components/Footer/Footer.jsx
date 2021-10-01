import Logo from "../Logo/Logo";
import MyText from "../MyText/MyText";


const Footer = () => {
    return <footer className="footer">
        <div className="terms">
            <a href="#" className="terms-link">{<MyText tid="terms" />}</a>
            <a href="#" className="terms-link">{<MyText tid="privacy" />}</a>
            <a href="#" className="terms-link">{<MyText tid="about" />}</a>
        </div>
        <div className="languages">
            <select className="select-languages" name="languages" id="languages">
                <option value="en">english</option>
            </select>
            <Logo className="logo logo-smaller" />
        </div>
    </footer>;
};

export default Footer;