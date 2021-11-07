import { createContext, useState } from "react";
import { languageOptions, dictionary } from "./dictionary/dictionary";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionary.en,
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");
  const [fullUserLanguage, setFullUserLanguage] = useState("english");
  //   const { setTitle } = useContext(MainContext);

  const provider = {
    userLanguage,
    fullUserLanguage,
    dictionary: dictionary[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected].short ? selected : "en";
      const newFullLanguage = languageOptions[selected].full
        ? languageOptions[selected].full
        : "english";
      console.log(newLanguage);
      setUserLanguage(newLanguage);
      setFullUserLanguage(newFullLanguage);
      //   setTitle(dictionary[userLanguage]["title"]);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
