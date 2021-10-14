import React, { useContext } from "react";
import { Context } from "../../context";
import { languageOptions } from "../../dictionary/dictionary";
import { LanguageContext } from "../../languageContext";
import { ReactComponent as ArrowUp } from "./../../assets/images/arrow-up.svg";
import { dictionary } from "../../dictionary/dictionary";

const LanguageSelect = () => {
  const { isOpenSelect, setIsOpenSelect } = useContext(Context);
  const { userLanguageChange, fullUserLanguage } = useContext(LanguageContext);
  const [title, setTitle] = React.useState(dictionary["en"]["title"]);

  const togglingSelect = () => setIsOpenSelect(!isOpenSelect);
  const onOptionClicked = (value) => {
    userLanguageChange(value);
    setIsOpenSelect(false);
    setTitle(dictionary[value]["title"]);
    // console.log(dictionary[value]);
  };

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={togglingSelect}>
        <ArrowUp className="arrow-up" />
        {fullUserLanguage}
      </div>
      {isOpenSelect && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {Object.values(languageOptions).map((option, id) => (
              <li
                key={id}
                onClick={() => {
                  onOptionClicked(option.short);
                }}
                className="list-item"
              >
                {<ArrowUp className="arrow-up not-visible" />}
                {option.full}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
