import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const Context = React.createContext(null);

export default function MainContext({ children }) {
  const [testResult, setTestResult] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `https://covid-results-be.herokuapp.com/api/getTestResult${window.location.pathname}`
    }).then((res) => {
      console.log(res);
      setTestResult(res.data.rows[0]);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        testResult, setTestResult
      }}
    >
      {children}
    </Context.Provider>
  );
}

MainContext.propTypes = {
  children: PropTypes.node.isRequired,
};
