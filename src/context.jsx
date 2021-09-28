import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const Context = React.createContext(null);

export default function MainContext({ children }) {
  const [testResult, setTestResult] = React.useState([])
  // const [appointmentId, setAppointmentId] = React.useState("");
  // const [appointmentStart, setPassword] = React.useState("");
  // const [appointmentEnd, setAppointmentEnd] = React.useState("");
  // const [concernId, setConcernId] = React.useState("");
  // const [concernDescription, setConcernDescription] = React.useState("");
  // const [locationId, setLocationId] = React.useState("");
  // const [locationName, setPassword] = React.useState("");
  // const [firstname, setPassword] = React.useState("");
  // const [lastname, setPassword] = React.useState("");
  // const [birthDate, setPassword] = React.useState("");
  // const [eMail, setPassword] = React.useState("");
  // const [mobileNumber, setPassword] = React.useState("");
  // const [acceptedPrivacyDeclaration, setPassword] = React.useState("");
  // const [acceptedTermsOfUse, setPassword] = React.useState("");
  // const [testId, setPassword] = React.useState("");
  // const [testResult, setPassword] = React.useState("");
  // const [testDateTime, setPassword] = React.useState("");


  React.useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/api/getTestResult${window.location.pathname}`
    }).then((res) => {
      console.log(res);
      setTestResult(res.data.rows)
    })
  }, [])

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
