import { createContext, useState } from "react";
import { languageOptions, dictionary } from "./dictionary/dictionary";

export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionary.en
});

export function LanguageProvider({ children }) {
    const [userLanguage, setUserLanguage] = useState("en");

    const provider = {
        userLanguage,
        dictionary: dictionary[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : 'en';
            setUserLanguage(newLanguage);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
}