import { createContext, useState } from "react";
import { languageOptions, dictionary } from "./dictionary/dictionary";

export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionary.en
});

export function LanguageProvider({ children }) {
    const [userLanguage, setUserLanguage] = useState("en");
    const [fullUserLanguage, setFullUserLanguage] = useState("english");

    const provider = {
        userLanguage,
        fullUserLanguage,
        dictionary: dictionary[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected].short ? selected : 'en';
            const newFullLanguage = languageOptions[selected].full ? languageOptions[selected].full : 'english';
            console.log(newLanguage);
            setUserLanguage(newLanguage);
            setFullUserLanguage(newFullLanguage);
        },
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
}