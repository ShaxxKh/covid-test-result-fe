import { useContext } from "react";
import { LanguageContext } from "../../languageContext";

const MyText = ({ tid }) => {
    const { dictionary } = useContext(LanguageContext);

    return dictionary[tid] || tid;
};

export default MyText;