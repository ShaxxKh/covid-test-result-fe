import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import constants from "./constants";

export const Context = React.createContext(null);

export default function MainContext({ children }) {
  const [testResult, setTestResult] = React.useState([]);
  const [isOpenSelect, setIsOpenSelect] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `${constants.BACKEND_URL}/getTestResult${window.location.pathname}`,
    }).then((res) => {
      console.log(res);
      setTestResult(res.data.rows[0]);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        testResult,
        setTestResult,
        isOpenSelect,
        setIsOpenSelect,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </Context.Provider>
  );
}

MainContext.propTypes = {
  children: PropTypes.node.isRequired,
};
