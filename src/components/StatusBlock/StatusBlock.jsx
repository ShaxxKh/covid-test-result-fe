import { useContext } from "react";
import { Context } from "../../context";
import MyText from "../MyText/MyText";
import status from "./../../assets/images/tick.svg";

const StatusBlock = () => {
    const { testResult } = useContext(Context);
    const { testid, testdatetime } = testResult;

    return <div className="status-block">
        <img src={status} alt="status" className="status-img" />
        <div className="status-data">
            <h3 className="status">{testResult.testResult}</h3>
            <span className="status-info"><MyText tid="id" />: {testid}</span>
            <span className="status-info"><MyText tid="date" />: {testdatetime}</span>
        </div>
    </div>;
};

export default StatusBlock;