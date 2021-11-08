import { useContext } from "react";
import { Context } from "../../context";
import MyText from "../MyText/MyText";

const PersonalInfo = () => {
    const { testResult } = useContext(Context);
    const { firstname, lastname, birthdate, locationname, appointmentid } = testResult;

    return <div className="personal-info-block">
        <h3 className="peronal-info-heading">{<MyText tid="personalInfo" />}</h3>
        <span className="personal-info-text">{<MyText tid="name" />}: {firstname}, {lastname}</span>
        <span className="personal-info-text">{<MyText tid="birthday" />}: {new Date(birthdate).toLocaleDateString()}</span>
        <span className="personal-info-text">{<MyText tid="location" />}: {locationname}</span>
        <span className="personal-info-text">{<MyText tid="appointmentId" />}: {appointmentid}</span>
    </div>;
};

export default PersonalInfo;